import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export type TUser = {
    nom: string;
    email: string;
    password: string;
    role: string;
    comparePassword(enteredPassword: string): Promise<boolean>;
}

export interface IUser extends TUser, Document { }

const userSchema: Schema = new Schema({
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
});

userSchema.methods.comparePassword = async function (enteredPassword: string): Promise<boolean> {
    return bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model<IUser>('Users', userSchema);