import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },
);

userSchema.statics.findByUsername = async function (username) {
  let user = await this.findOne({ username, });
  return user;
};

const User = mongoose.model('User', userSchema);

export default User;
