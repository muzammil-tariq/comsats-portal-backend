import jwt from 'jsonwebtoken';
import config from '../config';
const multer = require("multer");
const path = require("path");

export function withAuth(req:any, res:any, next:any) {
  const authHeader = req.headers['authorization']
//   TokenArray = jwttoken.split(" ");
// return
// const token = authHeader && authHeader.split(' ')[1]
// console.log(token);
const headerAuth=req.headers.authorization;
if (headerAuth == null) res.send({status:401, message:'401: Unauthorized'})
const token=headerAuth.split(' ')[1];

  // return res.sendStatus(401)
//   if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//     console.log(req.headers.authorization.split(' ')[1]);
    
//     return req.headers.authorization.split(' ')[1];
// } else if (req.query && req.query.token) {
//     return req.query.token;
// }
  jwt.verify(token, config.JWTSecret as string, (err: any, user: any) => {

    if (err) res.send({status:403, message:'403: User Forbidden'})

    req.user = user
// res.send( user);
    next()
  })
}

let storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => cb(null, "src/uploads"),
  filename: (req: any, file: any, cb: any) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

export let upload = multer({
  storage: storage,
  limit: { fileSize: 1000000 * 100 },
}).single("myfile");