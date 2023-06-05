import RentbikeModel from "../Model/Rentbike.model.js";
///create bike
export const createRentbike = async (req, res) => {
  const { name } = req.body;
  try {
    if (!name) {
      return res.status(401).send({ message: "name is required" });
    }
    const existingBike = await RentbikeModel.findOne({ name });
    if (existingBike) {
      return res.status(200).send({
        suceess: true,
        message: "Bike Already Exists",
      });
    }
    const bike = await new RentbikeModel({
      name,
    }).save();
    res.status(201).send({
      suceess: true,
      message: "Bike create sucessful",
    });
  } catch (error) {
    console.log("error");
    res.status(500).send({
      success: false,
      error,
      message: "Error in Bike",
    });
  }
};

///update bike
export const updateRentbike = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const bike = await RentbikeModel.findByIdAndUpdate(id);
    res.status(200).send({
      suceess: true,
      message: "Bike Updated Sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Bike",
    });
  }
};
