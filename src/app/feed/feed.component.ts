import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: any = [];
  users: any = [];

  user: string;
  url: string;

  constructor(private ps: PostService, iconRegistry: MatIconRegistry, private _sanitizer: DomSanitizer, private service: PostService, private app: AppComponent) {
  }

  onAddPost(form: NgForm, user: string) {

    this.user = localStorage.getItem("username");
    this.service.addPost(this.user, form.value.songName, form.value.genre, form.value.link).subscribe();
    this.url = form.value.link;
    console.log(form.value);
    form.resetForm();
    // window.location.reload();
  }

  ngOnInit() {



    this.ps.getPostsData().subscribe(data => {
      this.posts = data;
    });

    this.ps.getUserData().subscribe(data => {
      this.users = data;
    });
  }

  getLink(link: String) {
    console.log(link);
  }

  onDelete(id: String) {
    console.log("Delete called " + id);
    this.ps.deletePost(id).subscribe(() => {
      this.ngOnInit();
    })
  }
}