import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {


  constructor(private service: PostService) { }

  onAddPost(form: NgForm) {

    this.service.addPost(form.value.songName, form.value.genre, form.value.link).subscribe();

    console.log(form.value);
    form.resetForm();
  }
  ngOnInit() {
  }

}
