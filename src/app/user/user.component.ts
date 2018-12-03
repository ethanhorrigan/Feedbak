import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { PostService } from '../../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private Http: HttpClient, private ps: PostService, private app: AppComponent) { }

  posts: any = [];
  myPosts: any = [];
  user: string;
  avatar: string;
  postCount: any;

  //GETS ID OF POST AND SENDS IT TO THE SERVER TO BE DELETED
  onDelete(id: string) {
    console.log("Deleting item")
    this.ps.deletePost(id).subscribe();
    location.reload();
    this.ngOnInit();
  }

  // ON INIT GETS THE POST DATA AND ONLY DISPLAYS THE POSTS THAT THE LOGGED IN USER CREATED
  ngOnInit() {
    this.user = localStorage.getItem("username");
    this.app.setLogin(this.user);
    this.ps.getPostsData().subscribe(data => {
      this.posts = data;
      var j = 0;
      for (var index = 0; index < this.posts.length; index++) {
        if (this.posts[index].postedBy == this.user) {
          this.myPosts[j] = this.posts[index];
          j++;
        }
      }
      this.postCount = j;
      console.log(this.posts);
      console.log(this.myPosts)
    });
  }
}


