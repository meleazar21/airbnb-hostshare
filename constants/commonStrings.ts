import { env } from "process";

export const HOSTSHARE_FEE = process.env.NEXT_PUBLIC_HOSTSHARE_FEE ?? "100";
export const MINIMUM_GUESTS = process.env.NEXT_PUBLIC_MINIMUM_GUESTS ?? "2";
export const MAX_LENGTH_NUMBER_INPUT = process.env.NEXT_PUBLIC_MAX_LENGTH_NUMBER_INPUT ?? "10";
export const NUMBER_OF_DECIMALS = process.env.NEXT_PUBLIC_NUMBER_OF_DECIMALS ?? "2";
