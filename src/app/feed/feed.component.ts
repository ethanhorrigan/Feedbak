import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {


  posts: any = [];

  constructor(private ps: PostService) { }

  ngOnInit() {
    //this.posts = this.ps.getPosts();
    this.ps.getPostsData().subscribe(data => {
      this.posts = data;
    });
  }

  onDelete(id: String) {
    console.log("Delete called " + id);
    this.ps.deletePost(id).subscribe(() => {
      this.ngOnInit();
    })
  }
}