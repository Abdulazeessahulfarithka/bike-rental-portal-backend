import mongoose from "mongoose";

const Bookingschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Booking", Bookingschema);
