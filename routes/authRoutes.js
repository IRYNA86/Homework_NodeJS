import { Router } from "express";
import { authService } from "../services/authService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.post('/login', (req, res, next) => {
	try {
         const data ={
         	email: req.body.email,
         	password: req.body.password
         };
         const user = authService.login(data);
        //res.data = data;
        res.send(user)
     } catch (err) {
         res.status(400).send(err.message)
     } finally {
         next();
     }

}, responseMiddleware);

export { router };
