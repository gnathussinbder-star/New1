import 'server-only';
// Never import this file from a Client Component. It contains the private answer key.
export const answerKey: Record<string, number> = {
  G1: 1, G2: 1, G3: 1, G4: 1, G5: 2, G6: 1, G7: 1, G8: 1,
  V1: 0, V2: 1, V3: 1, V4: 0, V5: 1, V6: 2,
  R1: 1, R2: 2, R3: 1, R4: 1, R5: 1, R6: 1, R7: 1,
  L1: 1, L2: 1, L3: 2, L4: 3, L5: 1, L6: 2, L7: 2,
};
