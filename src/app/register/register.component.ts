import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: PostService) { }

  onAddUser(form: NgForm) {

    this.service.addUser(form.value.username, form.value.email, form.value.password).subscribe();

    console.log(form.value);
    form.resetForm();
  }
  ngOnInit() {
  }

}
