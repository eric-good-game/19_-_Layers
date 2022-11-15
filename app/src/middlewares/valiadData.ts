import { NextFunction, Request, Response } from "express";

const params ={
    signup: {
        email: 'email',
        password: 'password',
        name: 'string',
        address:'string',
        age:'number',
        phone_number:'string',
        // profilePhoto: 'string'
    },
}
type Errors = [string]
type Data = {
    email: string,
    password: string,
    name: string,
    address:string,
    age:number,
    phone_number:string,
}

class ValidData {
    static validateData = (req: Request, res: Response, next: NextFunction) => {

        const{data, errors} = this.validateSignup(req.body, params.signup);

        if(errors.length){
            return res.status(400).json({errors});
        }
        
        next();
    };

  private static validateSignup = (body:any,params:any) => {
    const errors:Errors = [] as any;
    const data:Data = {} as any;
    Object.keys(params).forEach(key => {
        if(!body[key]){
            errors.push(`${key} is required`)
            return;
        }
        if(key === 'email'){
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!emailRegex.test(body[key])){
                errors.push(`${key} is not valid`)
                return;
            }
            data[key] = body[key]
        }
        if(key === 'password'){
            if(body[key].length < 6){
                errors.push(`${key} must be at least 6 characters`)
                return;
            }
            data[key] = body[key]
            if(body[key].includes(' ')){
                errors.push(`${key} must not contain spaces`)
                return;
            }
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
            if(!passwordRegex.test(body[key])){
                errors.push(`${key} is not valid`)
                return;
            }
            data[key] = body[key];
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        }
        if(key === 'name'){
            const nameRegex = /^[a-zA-Z ]{2,}$/;
            if(!nameRegex.test(body[key])){
                errors.push(`${key} is not valid`)
                return;
            }
            data[key] = body[key];
        }
        if(key === 'address'){
            const addressRegex = /^[a-zA-Z0-9 .]{2,}$/;
            if(!addressRegex.test(body[key])){
                errors.push(`${key} is not valid`)
                return;
            }
            data[key] = body[key];
        }
        if(key === 'age'){
            const age = Number(body[key]);
            if(!age || age<18){
                errors.push(`${key} is not valid`)
                return;
            }
            data[key] = age;
        }
        if(key === 'phone_number'){
            const phone_number = body[key].replace('+', '');

            if(!Number(phone_number) || phone_number.length < 10){
                errors.push(`${key} is not valid`);
            }
            data[key] = body[key];
        }
    })

    return {data, errors}
        
  }
}

export default ValidData