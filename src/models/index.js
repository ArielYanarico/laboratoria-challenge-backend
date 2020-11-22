import mongoose from 'mongoose';
 
import User from './user';
import Post from './post';
 
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};
 
const models = { User, Post };
 
export { connectDb };
 
export default models;
