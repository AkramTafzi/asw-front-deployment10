import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comments } from '../modelos/Comments';

@Injectable({
  providedIn: 'root',
})
export class ThreadsService {
  constructor(private http: HttpClient) {}

  public async getThreads(): Promise<Comments[]> {
    let threads = await this.http
      .get<Comments[]>(
        "https://asw-back-deployment-production-7eb3.up.railway.app" +
          '/comment/user/' +
          localStorage.getItem('username')
      )
      .toPromise();
    return threads as Comments[];
  }
}
