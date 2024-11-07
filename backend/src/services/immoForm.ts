import ImmoForm, { TImmoForm } from "../models/immoForm";

export async function saveImmoForm(immoField: TImmoForm) {
    try {
        const immoForm = new ImmoForm(immoField);

        await immoForm.save();

        return immoForm;
    } catch (err: any) {
        throw new Error(err.message || "Server error");
    }
}