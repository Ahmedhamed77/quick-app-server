import mongoose, { connect } from "mongoose";

export const connectDB = async (url: string) => {
  const res = await connect(url);
  return res;
};
