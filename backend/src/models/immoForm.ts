import mongoose, { Document, Schema } from 'mongoose';

export type TImmoForm = {
    buildId: string;
    name: string;
    surname: string;
    email: string;
    message: string;
};

export interface IImmoForm extends TImmoForm, Document { }

const immoFormSchema: Schema = new Schema({
    buildId: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
}, { collection: 'ImmoForm' });

const ImmoForm = mongoose.model<IImmoForm>('ImmoForm', immoFormSchema);

export default ImmoForm;