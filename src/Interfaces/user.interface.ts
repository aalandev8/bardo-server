import { Types } from 'mongoose';

export interface IUser {
    _id?: Types.ObjectId;
    username: string;
    password: string;
    fiestas: string[];
    roles: string[];
}