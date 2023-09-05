import mongoose, { Schema, model } from "mongoose";

interface Task {
  _id: string;
  title: string;
  desc?: string;
}

const TaskSchema = new Schema<Task>({
  title:{
    type:String,
    required: [true, 'must provide title'],
    trim: true,
    maxlength: [20, 'title can not be more than 20 characters'],
  },
  desc: String,
});

// create a model
export const Task = model<Task>("Task", TaskSchema);
