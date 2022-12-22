import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { News } from '../modelos/News';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }

  public async getShow(): Promise<News[]> {
    let show = await this.http.get<News[]>("https://asw-back-deployment-production-7eb3.up.railway.app" + "/show").toPromise();
    return show as News[];
  }
}
