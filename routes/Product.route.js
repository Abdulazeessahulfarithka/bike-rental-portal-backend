import { createProductController } from "../Contollers/Productbike.controller.js";
import express from "express";
import formidable from "express-formidable";

const router = express.Router();

router.post("/create-product", createProductController, formidable());
export default router;
