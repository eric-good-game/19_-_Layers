import { model, Schema } from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwt_secret } from "../config/constants";

interface IUser {
    name: string;
    email: string;
    password: string;
    profile_photo?: string;
    address: string;
    phone_number: string;
    age: number;
    current_cartId?: string;
    token?: string;
    refreshToken?: string;
  }
  interface IUserMethods {
    comparePassword: (password: string) => Promise<boolean>;
  }
interface IUserModel extends IUser, IUserMethods {};
  // 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUserModel>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profile_photo: { type: String, required: false },
    address: { type: String, required: false },
    phone_number: { type: String, required: false },
    age: { type: Number, required: false },
    current_cartId: { type: String, required: false },
    token: { type: String, required: false },
    refreshToken: { type: String, required: false },
});

userSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    try {
        return bcrypt.compare(password, this.password);
    } catch (error) {
        throw error;
    }
}

userSchema.methods.generateToken = async function (){
    try {
        const user = this;
        const token = jwt.sign({ _id: user._id }, jwt_secret, { expiresIn: '15m' });
        const refreshToken = jwt.sign({ _id: user._id }, jwt_secret,{ expiresIn: '1d' });
        user.token = token;
        user.refreshToken = refreshToken;
        await user.save();
        return token;
    }catch(error){
        console.log(error);
    }
}

  // 3. Create a Model.
  const User = model<IUserModel>('User', userSchema);

  export default User;