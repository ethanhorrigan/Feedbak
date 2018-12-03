import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private ps: PostService) { }
  post: any = [];
  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.ps.getPost(this.route.snapshot.params['_id']).subscribe(data => {
      this.post = data;
    })
  }
  onEditPost(form: NgForm) {
    this.ps.updatePost(this.post[0]._id, localStorage.getItem("username"), form.value.songName, form.value.genre, form.value.link).subscribe();
    this.router.navigate(['/list']);
  }
}
