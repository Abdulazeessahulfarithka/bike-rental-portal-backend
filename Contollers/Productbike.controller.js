import ProductbikeModel from "../Model/Productbike.model.js";
import * as dotenv from "dotenv";
import RentbikeModel from "../Model/Rentbike.model.js";

export const createProductController = async (req, res) => {
  try {
    const { name, branch, area, state, pincode, price, city, quantity } =
      req.body;

    switch (true) {
      case !name:
        return res.status(500).send({ error: "name is required" });
      case !branch:
        return res.status(500).send({ error: "branch is required" });
      case !area:
        return res.status(500).send({ error: "area is required" });
      case !state:
        return res.status(500).send({ error: "state is required" });
      case !city:
        return res.status(500).send({ error: "city is required" });
      case !pincode:
        return res.status(500).send({ error: "pincode is required" });
      case !price:
        return res.status(500).send({ error: "price is required" });
      case !quantity:
        return res.status(500).send({ error: "quantity is required" });
    }

    const product = new ProductbikeModel({ ...req.body });
    await product.save();

    res
      .status(201)
      .send({ sucess: true, message: "succeesfully product created", product });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ sucess: false, message: "error in product creating", error });
  }
};
