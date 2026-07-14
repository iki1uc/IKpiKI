// pipeline.js – IKpiKI 5E-Korrektur-Pipeline

import { geoMeta } from "./81_81_1.js";
import { respo9hoch9 } from "./9h9.js";

export function pipeline5E(step, Phi, phi, phi2, phiinfty) {

    const meta = geoMeta(Phi, phi, phi2, phiinfty);
    const id = respo9hoch9(Phi, phi, phi2, phiinfty);

    const items = {
        axes: meta.axes,
        lage: meta.lage,
        ort: meta.ort,
        ghost: id.ghost,
        tmp: id.tmp
    };

    const order = ["axes", "lage", "ort", "ghost", "tmp"];
    const item = order[step % 5];

    return {
        step,
        corrected: item,
        value: items[item],
        status: "5E-corrected"
    };
}
