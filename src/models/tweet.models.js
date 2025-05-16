import mongoose, { Schema, Types } from "mongoose";

const tweetSchema = new Schema(
  {
    content: {
      type: String,
      require: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("Tweet", tweetSchema);
