import type { StatItem } from "@/model/StatItem.ts";
import type { BasePath } from "@/model/BasePath.ts";
import type { DownloadFile } from "@/model/DownloadFile.ts";
import type { Address } from "@/model/Address.ts";
import type { Contact } from "@/model/Contact.ts";

export type Info = {
  name: string;
  price: string;
  virtualTourLink: string;
  gallery: BasePath & { images: string[] };
  description: string[];
  descriptionEn?: string[];
  stats: StatItem[];
  downloads: BasePath & { files: DownloadFile[] };
  address: Address;
  contact: Contact;
  badges: { title: string; download: BasePath & DownloadFile }[];
};
