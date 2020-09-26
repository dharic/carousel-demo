import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string;
  passWord: string;
  loginList = [
    { username: 'name111', password: 'pass111' },
    { username: 'name222', password: 'pass222' },
    { username: 'name333', password: 'pass333' }
  ];
  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
    if (localStorage.getItem('loggedin') === 'true') {
      this.router.navigate(['dashboard']);
    }
  }
  clearInput() {
    this.userName = undefined;
    this.passWord = undefined;
  }

  logIn() {
    if (this.userName && this.passWord) {
      const detail = { username: this.userName, password: this.passWord };
      if (this.loginList.find(x => x.username === detail.username && x.password === detail.password)) {

        this.router.navigate(['dashboard']);
        localStorage.setItem('loggedin', 'true');
        localStorage.setItem('username', detail.username);
      } else {
        alert('Invalid username or password');
      }
    } else {
      alert('Fill Properly');
    }
  }

}
