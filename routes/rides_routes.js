import express from "express";
import bodyParser from "body-parser";
import {
  createRequest,
  getAllRequest
} from "../controllers/requests_controllers";
import {
  getAllRide
} from "../controllers/rides_controllers";

import { check } from "express-validator/check";
import { verifyToken } from "../middlewares/middleware";

var router = express.Router()
   
  //endpoint to get all ride offers
router.get("/", verifyToken, getAllRide);


  
  //endpoint to create a request for a rideoffer
router.post('/requests',[
  check('phone_no', 'must be a valid mobile number').isMobilePhone()
  ],verifyToken, createRequest); 
  
  
  //endpoint to get a specific request details
  // router.get('/users/rides/:rideId/requests', verifyToken, getRequest);
  
  //endpoint to get all requests
  router.get('/requests', verifyToken, getAllRequest);
  
     

export default router;

