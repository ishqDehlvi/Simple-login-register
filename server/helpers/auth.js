import bcrypt from "bcrypt";

export const hashPassword = (password)=>{ //Original password
    return new Promise((resolve,reject)=>{
        bcrypt.genSalt(8,(err,salt)=>{
            if(err){
                reject(err);
            }
            bcrypt.hash(password,salt,(err,hash)=>{ // salt + hash
                if(err){
                    reject(err);
                }
                resolve(hash);
            });
        });
    });
};

export const comparePassword=(password,hashed)=>{ //compare password and the hashed password
    return bcrypt.compare(password,hashed);
}