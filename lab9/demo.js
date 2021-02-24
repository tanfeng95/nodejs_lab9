const jwt = require('jsonwebtoken');

const username = 'alex';
const role = ['admin'];
const jwt_key = 'my-secret';
const jwt_exp = '5000';

const token  = jwt.sign({username,role},
    jwt_key,{ expiresIn:
jwt_exp });

console.log(token);


jwt.verify(token, jwt_key,(err,data)=>{
    if(err){
        console.log('token verification error',err.message);
    }else{
        console.log('user',data);
    }
});