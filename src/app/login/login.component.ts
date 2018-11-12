import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: PostService) { }

  users: any = [];
  onUserLogin(form: NgForm) {

    this.service.getUserData().subscribe(data => {
      this.users = data;
      console.log(data);


      for (let i = 0; i < this.users.length; i++) {
        if (form.value.username == this.users[i].username && form.value.password == this.users[i].password) {
          localStorage.setItem("username", this.users[i].username);
          console.log(this.users[i].username);

        }
      }

    });
  }

  ngOnInit() {
  }

}
