interface ImportMetaEnv {
  readonly VITE_BASE_PATH: string;
  readonly VITE_PROJECT_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
