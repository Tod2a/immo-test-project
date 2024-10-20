import mongoose, { Document, Schema } from 'mongoose';

interface IImmo extends Document {
    Name: string;
    Price: number;
    Description: string;
    Image: string;
}

const immoSchema: Schema = new Schema({
    Name: { type: String, required: true },
    Price: { type: Number, required: true },
    Description: { type: String, required: true },
    Image: { type: String, required: true },
}, { collection: 'Builds' });

const Immo = mongoose.model<IImmo>('Immo', immoSchema);

export default Immo;