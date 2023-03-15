const User = require("../models/user");

exports.register = async (req, res) => {
  // res.send("Register Route")
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password
    });
    
    res.status(201).json({
        success: true,
        user: user,
    })
  } catch (error) {
    res.status(500).json({
        success: false,
        error: error.message,
    })
  }
};

exports.login = async (req, res ) => {
  // res.send("Login Route");
  const {email, password} = req.body;
  if(!email || !password){
    res.status(400).json({success: false, error: "please provide email and password"})
  }

  try {
    const user = await User.findOne({email}).select("+password");

    if(!user){
      res.status(404).json({success:false, error: "Invalid crendentials"})
    }
    const isMatch = await user.matchPasswords(password)
    if(!isMatch){
      res.status(404).json({success:false, error: "Invalid crendentials"})
    }
    res.status(200).json({
      sucess: true,
      token: "tere5489744ere",
    })
  } catch (error) {
    res.status(500).json({success: false, error: error.message})
  }
};

exports.forgetpassword = (req, res) => {
  res.send("Forget Password Route");
};

exports.resetpassword = (req, res) => {
  res.send("Reset Password Route");
};
