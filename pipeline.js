import { respo9hoch9 } from "./9h9.js";

const cycle = ["axes", "lage", "ort", "ghost", "tmp"];

export function pipeline(step, Phi, phi, phi2, phiinfty) {

    const meta = respo9hoch9(Phi, phi, phi2, phiinfty);

    return {
        step,
        item: cycle[step % 5],
        value: meta[cycle[step % 5]] || null
    };
}
