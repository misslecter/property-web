import type { InjectionKey } from "vue";
import type { Info } from "@/model/Info.ts";

export const GLOBAL_INFO_KEY: InjectionKey<Info> = Symbol("info");
