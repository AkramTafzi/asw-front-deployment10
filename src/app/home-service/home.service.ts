import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { News } from '../modelos/News';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  public async getNews(): Promise<News[]> {
    let news = await this.http
      .get<News[]>("https://asw-back-deployment-production-7eb3.up.railway.app" + '/news')
      .toPromise();
    return news as News[];
  }
}
