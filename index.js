// const express = require("express");
import express from "express";
import cors from "cors";
import UserModel from "./models/users.js";
import mongoose from "mongoose";
const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(
  "mongodb+srv://wordhaven:1LF3erLTzIqlJmkS@cluster0.ygzindr.mongodb.net/?retryWrites=true&w=majority"
);
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await UserModel.create({ name, email, password });
    res.json(userDoc);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.listen(4000);
