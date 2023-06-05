import mongoose from "mongoose";

const Productschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

export default mongoose.model("product", Productschema);
