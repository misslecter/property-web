import type { InjectionKey, Ref } from "vue";
import type { Info } from "@/model/Info.ts";

export const GLOBAL_INFO_KEY: InjectionKey<Ref<Info>> = Symbol("info");
