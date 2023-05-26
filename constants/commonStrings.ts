import { env } from "process";

export const HOSTSHARE_FEE = process.env.NEXT_PUBLIC_HOSTSHARE_FEE ?? "100";
export const MINIMUM_GUESTS = process.env.NEXT_PUBLIC_MINIMUM_GUESTS ?? "2"