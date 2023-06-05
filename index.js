import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";
import colors from "colors";
import connectDB from "./Config/db.js";
import BikeRouter from "./routes/Rentbike.route.js";
import Productbike from "./routes/Product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// const MONGO_URL = process.env.MONGO_URL;
////DATABASE CONNECTION
connectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"))

/////ROUTERS

app.use("/api/bike", BikeRouter);
app.use("/api/product", Productbike);

//home
app.get("/", function (request, response) {
  response.send("<h1>Welcome to bile rental App</h1>");
});

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
