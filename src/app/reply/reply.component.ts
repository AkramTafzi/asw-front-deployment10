import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css'],
})
export class ReplyComponent implements OnInit {
  replyText: string = '';
  replyId: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.replyId = localStorage.getItem('reply');
  }

  handleChangeReply(value: string) {
    this.replyText = value;
  }

  async addReply(): Promise<void> {
    let jsonSubmit = {
      user: {
        username: localStorage.getItem('username'),
      },
      body: this.replyText,
    };

    let id: string | null = localStorage.getItem('reply');

    console.log("https://asw-back-deployment-production-7eb3.up.railway.app" + '/news/' + id + '/reply');
    const response = await fetch(
      "https://asw-back-deployment-production-7eb3.up.railway.app" + '/news/' + id + '/reply',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonSubmit),
      }
    );
    this.router.navigate(['']);
  }
}
