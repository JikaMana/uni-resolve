import { Schema, model, models, Document } from 'mongoose';

export interface IUser extends Document {
  clerkId: string; // Helpful if you use Clerk/Auth0 for auth later
  name: string;
  email: string;
  role: 'student' | 'admin' | 'staff';
  department?: string;
}

const UserSchema = new Schema<IUser>(
  {
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    role: {
      type: String,
      enum: ['student', 'admin', 'staff'],
      default: 'student',
    },
    department: { type: String },
  },
  { timestamps: true }
);

const User = models.User || model<IUser>('User', UserSchema);
export default User;
