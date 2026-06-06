import mongoose, { Schema, Document } from 'mongoose';

interface IWorkout extends Document {
  userId: string;
  name: string;
  description?: string;
  duration: number; // in minutes
  calories: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const WorkoutSchema = new Schema<IWorkout>(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    duration: { type: Number, required: true },
    calories: { type: Number, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Workout = mongoose.model<IWorkout>('Workout', WorkoutSchema);
