
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPostsData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts");
  }

  getUserData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/users");
  }

  addPost(postedBy: string, songName: string, genre: string, link: string): Observable<any> {
    const post: Post = { postedBy: postedBy, songName: songName, genre: genre, link: link };
    return this.http.post("http://localhost:8081/api/posts", post);
  }

  addUser(username: string, email: string, password: string): Observable<any> {
    const user: User = { username: username, email: email, password: password };
    return this.http.post("http://localhost:8081/api/users", user);
  }

  deletePost(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/posts/" + id);
  }
}