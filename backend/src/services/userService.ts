import User, { IUser } from '../models/User';

export const findUserByEmail = async (email: string): Promise<IUser | null> => {
    return User.findOne({ email });
};

export const comparePassword = async (user: IUser, password: string): Promise<boolean> => {
    return user.comparePassword(password);
};