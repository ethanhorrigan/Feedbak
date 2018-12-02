import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: PostService, private app: AppComponent) { }

  users: any = [];
  onUserLogin(form: NgForm) {

    this.service.getUserData().subscribe(data => {
      this.users = data;
      console.log(data);


      for (let i = 0; i < this.users.length; i++) {
        if (form.value.username == this.users[i].username && form.value.password == this.users[i].password) {
          this.app.setLogin(form.value.username);
          console.log(this.app.setLogin(form.value.username));
          localStorage.setItem("username", this.users[i].username);
          localStorage.setItem("isLoggedin", "true");
          location.reload();
          console.log(this.users[i].username + " logged in.");

        }
      }

    });
  }

  ngOnInit() {
    this.service.getUserData().subscribe(data => {
      this.users = data;
      console.log(this.users);
    }

}
