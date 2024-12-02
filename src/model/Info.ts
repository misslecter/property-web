import type { StatItem } from "@/model/StatItem.ts";
import type { BasePath } from "@/model/BasePath.ts";
import type { DownloadFile } from "@/model/DownloadFile.ts";

export type Info = {
  name: string;
  gallery: BasePath & { images: string[] };
  description: string[];
  stats: StatItem[];
  downloads: BasePath & { files: DownloadFile[] };
};
