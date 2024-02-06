/// <reference types="vite/client" />

interface ImportMetaEnv {
  // current app
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_DEV_SERVER_PORT: string;
  readonly VITE_APP_FAVICON_URL: string;

  // apis urls
  readonly VITE_BFF: string;
  readonly VITE_API_SERVER_SCENARIO: string;
  readonly VITE_API_SERVER_NOTES: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
