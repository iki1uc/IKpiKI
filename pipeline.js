// pipeline.js – vollständige IKpiKI-Pipeline
// 0 → 1 → 2 → 3 → 4

import { Matrix_81_81_1, geoMeta } from "./81_81_1.js";
import { respo9hoch9 } from "./9h9.js";

// Pipeline-Stufe 0: ROOT
export function pipeline0() {
    return {
        stage: 0,
        root: "iki1uc",
        status: "identity-ready"
    };
}

// Pipeline-Stufe 1: 64x64 Matrix
export function pipeline1() {
    return {
        stage: 1,
        matrix: Matrix_81_81_1,
        status: "matrix-ready"
    };
}

// Pipeline-Stufe 2: 9hoch9 Identität
export function pipeline2(Phi, phi, phi2, phiinfty) {
    return {
        stage: 2,
        identity: respo9hoch9(Phi, phi, phi2, phiinfty),
        status: "identity-meta-ready"
    };
}

// Pipeline-Stufe 3: 81_81_1 Engine
export function pipeline3(Phi, phi, phi2, phiinfty) {
    return {
        stage: 3,
        engine: geoMeta(Phi, phi, phi2, phiinfty),
        status: "engine-ready"
    };
}

// Pipeline-Stufe 4: Verkettung x(y(z(x)y)z)
export function pipeline4(Phi, phi, phi2, phiinfty) {

    const x = pipeline0();
    const y = pipeline1();
    const z = pipeline2(Phi, phi, phi2, phiinfty);
    const a = pipeline3(Phi, phi, phi2, phiinfty);

    return {
        stage: 4,
        pipeline: {
            x,
            y,
            z,
            a,
            chain: "(x(y(z(austauschbar))x)y)z"
        },
        status: "pipeline-ready"
    };
}
