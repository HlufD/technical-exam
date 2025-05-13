import { atom } from "jotai";

export const bankAtom = atom("");
export const branchAtom = atom("");
export const accountNameAtom = atom("");
export const accountNumberAtom = atom("");
export const proofFileAtom = atom<File | null>(null);
