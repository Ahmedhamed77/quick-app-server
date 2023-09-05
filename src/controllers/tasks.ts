import {Request, Response} from 'express';
import {Task} from '../model/task';
import mongoose from 'mongoose';

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).json({msg: error});
  }
};

export const createTak = async (req: Request, res: Response) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({task});
  } catch (error) {
    res.status(500).send({msg: error});
  }
};

export const getTask = async (req: Request, res: Response) => {
  const {id} = req.params;

  // Check if id is a valid ObjectId format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({msg: `No task found with ID: ${id}`});
  }
  try {
    const task = await Task.findOne({_id: id});
    res.status(200).json({task});
  } catch (error) {
    res.status(500).json({msg: error});
  }
};

export const updateTask = (req: Request, res: Response) => {
  res.send('updateTask');
};

export const deleteTask = (req: Request, res: Response) => {
  res.send('deleteTask');
};

module.exports = {
  getAllTasks,
  createTak,
  getTask,
  updateTask,
  deleteTask,
};
