import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import UserModel from "./models/users.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
const app = express();

const saltRounds = 10;

const secretKey = "sadlfbluagvla8p3u9rbubvluyp489r327";
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use(express.json());

app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://wordhaven:1LF3erLTzIqlJmkS@cluster0.ygzindr.mongodb.net/?retryWrites=true&w=majority"
);
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) {
          reject(err);
        } else {
          resolve(hash);
        }
      });
    });

    const userDoc = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });
    res.json(userDoc);
  } catch (err) {
    res.json(err);
  }
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const loginDoc = await UserModel.findOne({
      email: email,
    });
    const passok = await new Promise((resolve, reject) => {
      bcrypt.compare(password, loginDoc.password, function (err, match) {
        if (err) {
          reject(err);
        } else {
          resolve(match);
        }
      });
    });

    res.json(loginDoc);
    if (passok) {
      jwt.sign(
        { email, name: loginDoc.name, id: loginDoc._id },
        secretKey,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json("done");
        }
      );
      //userlogin
    } else {
      res.status(403).json("check your credentials");
    }
  } catch (err) {
    res.json(err);
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, secretKey, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.listen(4000);
