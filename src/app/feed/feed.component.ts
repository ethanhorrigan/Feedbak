import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {



  posts: any = [];

  constructor(private ps: PostService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private service: PostService) {
    iconRegistry.addSvgIcon(
      'comment',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/comment.svg'));
    iconRegistry.addSvgIcon(
      'delete-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/delete-icon.svg'));
  }

  onAddPost(form: NgForm) {
    this.service.addPost(form.value.songName, form.value.genre, form.value.link).subscribe();
    console.log(form.value);
    form.resetForm();
    window.location.reload();
  }

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