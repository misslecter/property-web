import type { DownloadFile } from "@/model/DownloadFile.ts";

type AssetsData = {
  basePath: string;
  items: DownloadFile[];
};

export type Assets = {
  badges: AssetsData;
  gallery: AssetsData & { items: string[] };
  downloads: AssetsData;
};
