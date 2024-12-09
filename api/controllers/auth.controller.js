import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    next(error);
    // next(errorHandler(300, "something went wrong. Please try again!"));
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found!"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "wrong credentials!"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...otherDetails } = validUser._doc;
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // expires in 1 day
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
        expires,
        sameSite: "none",
        secure: true,
      })
      .json({
        message: "User signed in successfully!",
        ...otherDetails,
      });
    // res.status(200).json({ message: "User signed in successfully!" });
  } catch (error) {
    next(error);
    // next(errorHandler(300, "something went wrong. Please try again!"));
  }
};
