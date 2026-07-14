import { respo9hoch9 } from "./9h9.js";

const order = ["axes", "lage", "ort", "ghost", "tmp"];

export function pipeline(step, Phi, phi, phi2, phiinfty) {

    const meta = respo9hoch9(Phi, phi, phi2, phiinfty);

    const item = order[step % 5];

    return {
        step,
        item,
        value: meta[item] || null
    };
}
