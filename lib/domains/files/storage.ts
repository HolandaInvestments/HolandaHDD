export type StoredFile = {
  bucket: string;
  key: string;
  filename: string;
  mimeType: string;
  byteSize: number;
};

export type StorageService = {
  createUploadUrl(input: { key: string; contentType: string }): Promise<{ url: string; key: string }>;
  createDownloadUrl(key: string): Promise<string>;
};

export class NotConfiguredStorageService implements StorageService {
  async createUploadUrl(input: { key: string }) {
    return { url: `/api/demo-upload/${encodeURIComponent(input.key)}`, key: input.key };
  }

  async createDownloadUrl(key: string) {
    return `/demo-files/${encodeURIComponent(key)}`;
  }
}

export const storageService = new NotConfiguredStorageService();

