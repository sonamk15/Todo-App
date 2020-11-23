const User = require('../models/users');
var jwt = require('jsonwebtoken');
const {secret} = require('./config');
const users = require('../routes/users');
const {
  ValidationError,
  NotFoundError,
  DBError,
  ConstraintViolationError,
  UniqueViolationError,
  NotNullViolationError,
  ForeignKeyViolationError,
  CheckViolationError,
  DataError
} = require('objection');


class UserService {
  constructor() {

  }

  // adding new user (sign-up)
  async createNewUser(req, res) {

    try{
    
      const newUser = req.body;
      const newuser = await User.query().insert(newUser)
      // console.log("try...")
      return res.send(newuser);
    } 
    catch (err)
    {
      res.send({
        sucess:0,
        message:"User is already exist"
      });
    }
  }

  async updateUser(req, res){
    try
    {
      const updated_data = req.body;
      const update = await User.query().findById(req.params.id).patch(updated_data);
      res.send({sucess:1, message:"updated successfully"});
    }
    catch (err)
    {
      return res.send(err);
    }

  }

  async getUserById(req, res){
    const id = req.params.id;
    try
    {
      const userData = await User.query().findById(id);
      if(!userData){
        return res.send({sucess:0, message:"Record not Found"})


      }
      return res.send(userData)
    }
    catch (err)
    {
      console.log(err);
      return res.send({sucess:0, error:err})
    }
  }


  async deleteUser(req, res){
    console.log(req.params.id);
    try
    {
      const delUser =  await User.query().deleteById(req.params.id);
      console.log(delUser);
      return res.send({sucess:1, message:"user deleted successfully"})

    }
    catch (err) 
    {
      console.log(err);
      return res.send({sucess:0, message:"Record Not Found"})

    }

  }

  async logIn(req, res){
    try
    {
      const results = await User.query().where('email', req.body.email);
      if(!results[0]){
        return res.send({
          success: 0,
          data: "Invalid email"
        });
      }
    
      const jsontoken = jwt.sign(
          req.body,
          secret,
          {expiresIn:"1h"}
        )
      return res.send({ 
        success: 1,
        message: "login successfully",
        token: jsontoken
      })
  
      
    }
    catch (err)
    {
      return res.send({
        success: 0,
        data: "Invalid email or password"
      });

    }


  }

}


module.exports = UserService
