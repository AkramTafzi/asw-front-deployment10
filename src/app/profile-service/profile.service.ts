import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { News } from '../modelos/News';
import { User } from '../modelos/User';
import { Comments } from '../modelos/Comments';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  public async getProfile(username: string): Promise<User>{
    let news = await this.http.get<User>("https://asw-back-deployment-production-7eb3.up.railway.app" + "/user?username=" + username).toPromise()
    return news as User;
  }

  public submit(user: any){
    this.http.post<any>("https://asw-back-deployment-production-7eb3.up.railway.app" + "/userk",user).subscribe()
  }

  public async getSubmissions(username: string): Promise<News[]>{
    let news = await this.http.get<News[]>("https://asw-back-deployment-production-7eb3.up.railway.app" + "/news/user?username=" + username).toPromise()
    return news as News[];
  }

  public async getComments(username:string): Promise<Comments[]>{
    let comments = await this.http.get<Comments[]>("https://asw-back-deployment-production-7eb3.up.railway.app" + "/comment/user/?username=" + username).toPromise()
    return comments as Comments[];
  }

  public async getVotedNews(username: string): Promise<News[]>{
    let news = await this.http.get<News[]>("https://asw-back-deployment-production-7eb3.up.railway.app" + "/news/liked?username=" + username).toPromise()
    return news as News[];
  }

  public async getVotedComments(username:string): Promise<Comments[]>{
    let comments = await this.http.get<Comments[]>("https://asw-back-deployment-production-7eb3.up.railway.app" + "/comments/liked?username=" + username).toPromise()
    return comments as Comments[];
  }

}
