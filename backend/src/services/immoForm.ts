import ImmoForm, { TImmoForm } from "../models/immoForm";

export async function saveImmoForm(immoField: TImmoForm) {
    try {
        const immoForm = new ImmoForm;

        return immoForm;
    } catch (err: any) {
        throw new Error("Server error");
    }
}