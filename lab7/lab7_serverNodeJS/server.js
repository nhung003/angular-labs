const exp = require("express");
const fs = require('fs');
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
var cors = require('cors');
const app = exp();
const port = 3000;
const PRIVATE_KEY = fs.readFileSync('private-key.txt');
app.use(bodyParser.json()); 
app.use(cors());
app.get("/", (req, res) => {
     res.send("<h1>Đây là trang home</h1>");
});
app.post('/login', (req, res) => {
     const un = req.body.un;
     const pw = req.body.pw;
     if (checkUserPass(un, pw)) {
          const userInfo = getUserInfo(un);   
          const jwtBearerToken = jwt.sign({}, PRIVATE_KEY, {
             algorithm: 'RS256',  
             expiresIn: 120, 
             subject: userInfo.id
          })          
          //res.cookie("SESSIONID", jwtBearerToken, {httpOnly:true, secure:false});
          res.status(200).json({ idToken: jwtBearerToken, expiresIn: 120 });
       }
       else res.sendStatus(401); // send status 401 Unauthorized  
})
checkUserPass = (un, pw) => {  
     if (un=='nhung' && pw=='123') { return true}
     if (un=='bb' && pw=='321') { return true}
     return false; 
}
getUserInfo = (username) =>{  
     if (username=='aa') return { "id":"1", hoten:"Đào Thị Hương Nhung" }  
     if (username=='bb')  return { "id":"2", hoten:"Nguyễn Thị Lượm" }  
     return {"id":"-1", "hoten":""}
}
app.listen(port, () =>{
     console.log(`Ung dung dang chay voi port ${port}`);
});