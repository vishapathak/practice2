const jwt = require("jsonwebtoken");
const user = require("../schema/userSchema");
const secret = process.env.SECRET;
async function authenticate(req, res, next) {
 try {
     const token = req.header("auth");
  if (token === undefined){ 
    return res.status(400).json({
      error: false,
      success: true,
      message: "Login require first",
    });
  }
  const decoded = jwt.verify(token, secret);
  //console.log(decoded);
  const Email = decoded.email;
  //console.log(Email);
  let User = await user.findOne({ email:Email });
  //console.log(User);
  if (User === undefined){ 
    return res.status(400).json({
      error: true,
      success: false,
      message: "User not found-middilware",
    });
  }
  req.User = User; // is user ko hum kidhar bhi store kar va sak te hai
  req.authEmail = Email;
  next();
 } catch (error) {
    res.status(500).json({
        message:"user is not authenticate",
        error:JSON.parse(error)
    })
 }
}

module.exports = { authenticate };
