import { NextFunction, Request, Response } from "express";
import passport from "passport";
import AuthServices from "../services/auth-services";

class AuthController {

    private autServices = new AuthServices();

    constructor(){
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }
    async signup(req: Request, res: Response, next:NextFunction): Promise<void> {
        passport.authenticate('signup', { session: false }, async (err, user, info) => {
            try {
                if (err || !user) {
                    console.log(err);
                    return next(err);
                }
                req.login(user, { session: false }, async (error) => {
                    if (error) return next(error);
                    const {_id,password, ...rest} = user.toObject({versionKey: false});
                    const token = await user.generateToken(user);
                    return res.json({ user:{...rest,token} });
                })
            } catch (error) {
                return next(error);
            }
        })(req, res, next);
    }
    async login(req: Request, res: Response, next:NextFunction): Promise<void> {
        passport.authenticate('login', { session: false }, async (err, user, info) => {
            try {
                if (!user) {
                    return res.status(400).json({ message: info.message });
                }
                if (err) {
                    const error = new Error('An error occurred.');
                    return res.status(401).json({error});
                }
                req.login(user, { session: false }, async (error) => {
                    if (error) return next(error);
                    const {_id,password, ...rest} = user.toObject({versionKey: false});
                    const token = await user.generateToken(user);
                    return res.json({ user:{...rest,token}});
                })
            } catch (error) {
                return next(error);
            }
        }
        )(req, res, next);
    }
}

const  authController =  new AuthController();
export default authController;