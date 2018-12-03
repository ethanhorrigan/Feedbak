import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  @Input() bgClass: string;
  @Input() icon: string;
  @Input() count: number;
  @Input() label: string;
  @Input() data: number;

  constructor(private ps: PostService, private app: AppComponent) { }

  posts: any = [];
  myPosts: any = [];
  user: string;
  avatar: string;

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
      this.count = j;
      console.log(this.posts);
      console.log(this.myPosts)
    });
  }
}
