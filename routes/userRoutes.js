import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();
router.get('/', function(req, res, next) {
  const users = userService.getAllUsers();
if (users) {
      //console.log(users);
      res.send(users);
  } else {
      const error = {
          error: true,
          message:"Users not got, error!"
      };
      res.status(400).send(JSON.stringify(error));
  }	
})
router.get('/:id', function(req, res, next) {
  const user = userService.getOneUser(req.params.id);;
if (user) {
      //console.log(user);
      res.send(user);
  } else {
      const error = {
          error: true,
          message:"User not got, error!"
      };
      res.status(404).send(JSON.stringify(error));
  }	

})

router.post('/', createUserValid, function(req, res) {
  const user = userService.create(req.body);
  if (user) {
      //console.log('router.post:',user);
      res.send("User create successful");
  } else {
      const error = {
          error: true,
          message:"User not create, error!"
      };
      res.status(400).send(JSON.stringify(error));
  }	
})

router.put('/:id', updateUserValid, function(req, res ) {
  const dataToUpdate = req.body;
  const user = userService.update(req.params.id, dataToUpdate);
  if (user) {
      //console.log('user:', user);
      res.send("User update successful");
  } else {
      const error = {
          error: true,
          message:"User not update, error!"
      };
      res.status(400).send(JSON.stringify(error));
  }	
})

router.delete('/:id', function(req,res){
  const user = userService.delete(req.params.id);
  if (user) {
      //console.log('user:', user);
      res.send("User delete successful");
  } else {
      const error = {
          error: true,
          message:"User not delete, error!"
      };
      res.status(400).send(JSON.stringify(error));
  }	
})
// TODO: Implement route controllers for user

export { router };
