import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  users: any = [];
  loginUser: string = "Guest";
  password: String;
  loggedIn: string;

  constructor(private ps: PostService) {

  }

  //Sets initial state of localstorage to save who is logged in
  ngOnInit() {

    this.loggedIn = localStorage.getItem("loggedIn");
    if (localStorage.getItem("isLoggedin") == null) {
      localStorage.setItem("isLoggedin", "false");
      location.reload();
    } else if (localStorage.getItem("isLoggedin") == "true") {
      localStorage.setItem("isLoggedin", "true");
    } else if (localStorage.getItem("isLoggedin") == "false") {
      localStorage.setItem("isLoggedin", "false");
    }

    //Gets user data
    this.ps.getUserData().subscribe(data => {
      this.users = data;
    });
  }

  setLogin(username: string) {
    this.loginUser = username;
  }

  //Resets state of login
  logout() {
    localStorage.removeItem("username");
    localStorage.setItem("isLoggedin", "false");
    this.loginUser = "Guest";
    location.reload();
  }

  //Getters and setters
  getUser() {
    return this.loginUser
  }
}
