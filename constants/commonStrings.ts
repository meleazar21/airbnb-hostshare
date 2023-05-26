import { env } from "process";

export const CLEANING_FEE = process.env.NEXT_PUBLIC_CLEANING_FEE ?? "10";
export const AIRBNB_FEE = process.env.NEXT_PUBLIC_AIRBNB_FEE ?? "100";