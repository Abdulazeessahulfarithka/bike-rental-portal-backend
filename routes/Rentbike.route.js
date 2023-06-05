import express from "express";
import {
  createRentbike,
  updateRentbike,
} from "./../Contollers/Rentbike.controller.js";

const router = express.Router();

router.post("/create-bike", createRentbike);
export default router;
