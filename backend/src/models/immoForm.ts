import mongoose, { Document, Schema } from 'mongoose';

export type TImmoForm = {
    name: string;
    surname: string;
    description: string;
    message: string;
};

export interface IImmoForm extends TImmoForm, Document { }

const immoFormSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
}, { collection: 'Builds' });

const ImmoForm = mongoose.model<IImmoForm>('ImmoForm', immoFormSchema);

export default ImmoForm;