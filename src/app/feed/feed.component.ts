import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
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

  constructor(private ps: PostService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private service: PostService, private app: AppComponent) {
    iconRegistry.addSvgIcon(
      'comment',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/comment.svg'));
    iconRegistry.addSvgIcon(
      'delete-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/delete-icon.svg'));
  }

  onAddPost(form: NgForm, user: string) {

    this.user = this.app.getUser();
    this.service.addPost(this.user, form.value.songName, form.value.genre, form.value.link).subscribe();

    console.log(form.value);
    form.resetForm();
    window.location.reload();
  }

  ngOnInit() {
    this.ps.getPostsData().subscribe(data => {
      this.posts = data;
    });

    this.ps.getUserData().subscribe(data => {
      this.users = data;
    });
  }

  onDelete(id: String) {
    console.log("Delete called " + id);
    this.ps.deletePost(id).subscribe(() => {
      this.ngOnInit();
    })
  }
}