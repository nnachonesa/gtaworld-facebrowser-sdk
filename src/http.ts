import ky, { KyInstance } from "ky";

export class HttpClient {
  public readonly ky: KyInstance;

  /**
   * 
   * @param {string} apiKey
   * @param {string} [baseUrl]
   * @memberof HttpClient
   */
  constructor(apiKey: string, baseUrl?:string) {
    this.ky = ky.create({
      prefix: baseUrl ? baseUrl : "https://face-es.gta.world/api/v1/page-api",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
  }
}