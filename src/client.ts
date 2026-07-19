import { HttpClient } from "./http";
import { PostsAPI, CommentAPI, PagesAPI } from "./routes";


export class FaceClient {
  public readonly posts: PostsAPI;
  public readonly comments: CommentAPI;
  public readonly pages: PagesAPI;

  /**
   * 
   * @param {string} apiKey
   * @param {string} [baseUrl]
   * @memberof FaceClient
   */
  constructor(apiKey: string, baseUrl?:string) {
    const http = new HttpClient(apiKey, baseUrl);

    this.posts = new PostsAPI(http);
    this.comments = new CommentAPI(http);
    this.pages = new PagesAPI(http);
  }
}