import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comments } from '../modelos/Comments';
import { News } from '../modelos/News';

@Injectable({
  providedIn: 'root',
})
export class SubmissionService {
  constructor(private http: HttpClient) {}

  public async getSubmission(id: string): Promise<News> {
    let submission = await this.http
      .get<News>("https://asw-back-deployment-production-7eb3.up.railway.app" + '/news/' + id)
      .toPromise();
    return submission as News;
  }

  public async getComments(idNews: string): Promise<Comments> {
    let comment = await this.http
      .get<Comments>("https://asw-back-deployment-production-7eb3.up.railway.app" + '/comment/' + idNews)
      .toPromise();
    return comment as unknown as Comments;
  }

  public async getCommentaries(idNews: string): Promise<number[]> {
    let comments = await this.http
      .get<Comments[]>("https://asw-back-deployment-production-7eb3.up.railway.app" + '/news/' + idNews + '/comments')
      .toPromise();
    return comments as unknown as number[];
  }
}
