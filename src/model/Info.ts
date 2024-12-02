import type { Gallery } from "@/model/Gallery.ts";
import type { StatItem } from "@/model/StatItem.ts";

export type Info = {
  name: string;
  gallery: Gallery;
  description: string[];
  stats: StatItem[];
};
