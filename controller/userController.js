const zo = require("zod");
const user = require("../schema/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
//const randomString = require("randomstring");


const userSchema = zo.object({
  firstName: zo.string(),
  lastName: zo.string(),
  email: zo.string(),
  phone: zo.string().regex(/^\+?[0-9\s-]{10,15}$/, {
    error: "only number require",
  }),
  password: zo
    .string()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/, {
      error: "password mush consist of letter and special character and number",
    })
});

async function Registercontroller(req, res) {
  try {
    const body = req.body;
    const validate = userSchema.parse(body);
    const hashPassword = await bcrypt.hash(body.password, 10);
    validate.password = hashPassword;
    const User = await user.create(validate);
    {
      /**
    // yeh already exist vala part hai 
      const alreadyUser =  await User.findOne(req.body);
     if(alreadyUser) return res.json ({ message: "user already register"});

     // yeh password ko hata ne vala part hai
     select .password
        */
    }
    res.status(201).json({
      data: User,
      message: "send successfully",
    });
    {
      /**
        // let User = new user(req.body) ;
    // let result = await User.save();
    // result = result.toObject();
    // delete result.password
    // res.send(result);
    */
    }
  } catch (error) {
    res.status(500).json({
      message: "error register user",
      error: JSON.parse(error.message),
    });
  }
}


async function loginController(req, res) {
    const secret = process.env.SECRET;
  try {
    if (req.body.password && req.body.email) {
      let User = await user.findOne({ email: req.body.email });
      console.log(User);
      let validUser = await bcrypt.compare(req.body.password, User.password);
      const token = jwt.sign({ email: req.body.email },secret);
      //console.log(token);
      //console.log(validUser);
      // console.log(req.body.password,User.password,hashPassword);
      if (validUser && User) {
        res.status(200).json({
          success: true,
          error: false,
          data: User,
          token,
        });
      } else {
        res.status(404).json({
          success: true,
          error: false,
          message: "user not found",
        });
      }
    } else {
      res.status(404).json({
        success: true,
        error: false,
        message: "user not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "error in login user",
      error: JSON.parse(error.message),
    });
  }
}

async function profileController(req, res) {
  try {
    if (req?.body?.email === undefined) {
      res.status(500).json({
        error: true,
        success: false,
        message: " user are not valid or not found",
      });
    }
    const { email } = req.body;
    const User = await user.findOne({ email }); //.select("-password");
    res.status(200).json({
      error: false,
      success: true,
      message: " User found successfully",
      data: User,
    });
  } catch (error) {
    res.status(500).json({
      message: " error in fetching profile",
      error: JSON.parse.error,
    });
  }
}

async function updateUser(req, res) {
  try {
    let validateUser = userSchema.partial().parse(req.body);
    let User = await user.findOneAndUpdate(
      { email: req.body.email },
      validateUser,
      
  { returnDocument: "after" },
    );
    // console.log(User);
    if (!User) {
      return 
      res.status(400).json({
        error: true,
        success: false,
        message: "Unable to update",
      });
    }
    res.status(200).json({
      error: false,
      success: true,
      message: "Update successfully",
      User,
    });
  } catch (error) {
    res.status(500).json({
      message: " error in updateing user profile",
      error: JSON.parse(error),
    });
  }
}

async function deleteuser(req, res) {
  try {
    let deletedUser = await user.findOneAndDelete({ email: req.body.email });
    if (!deletedUser) {
      res.status(404).json({
        success: false,
        error: true,
        message: "user not found.",
      });
    }
    res.status(200).json({
      success: true,
      error: false,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: " error in updateing user profile",
      error: JSON.parse(error),
    });
  }
}
async function forgotPassword(req, res) {
    try {

        const User = await user.findOne({email:req.body.email})

        if(!User){
           return res.status(404).json({
                error: true,
                success: false,
                message:" user not found"
          })
         }
         //let token = randomString.generate();
         const transporter = nodemailer.createTransport({
          host: process.env.MAIL_HOST,
          port: process.env.MAIL_PORT,
          secure: false,
          auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
          },
            });

           

         const token = "visha12344321";
         let generatedURL = `${process.env.FRONTEND}/reset-password/?token=${token}`;

             await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: req.body.email,
      subject: "Clarify Forget Password",
      text: generatedURL,
    });

         res.status(200).json({
          error: false,
          success: true,
          message: "User reset password has been generated successfully",
          
         })
        //    let newString = randomString.generate();
        //     const data = await user.updateOne({email:req.body.email},{$set:{token:newString}})
        //     res.status(200).json({success:true, message:" check email first"})
    } catch (error) {
        res.status(500).json({
            message:"unable to forgot password",
            error,
        })
    }
}
module.exports = {
  Registercontroller,
  loginController,
  profileController,
  updateUser,
  deleteuser,
  forgotPassword,
};
