import mongoose from 'mongoose';

const subToDo = mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'User'
    },
  },
  { timestamp: true }
);

export const subToDo = mongoose.model('subToDo', subToDo);
