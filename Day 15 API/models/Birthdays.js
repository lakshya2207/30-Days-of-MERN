import mongoose from "mongoose";

const BirthdaysSchema = new mongoose.Schema({
    name:String,
    dob:String
  });
export const Birthdays = mongoose.model('Birthdays', BirthdaysSchema);