import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  slides = [];
  selected = 0;
  previous = 0;
  next = 0;
  username = localStorage.getItem('username');
  constructor(private router: Router) {
    for (let i = 1; i <= 15; i++) {
      this.slides.push('slide Name' + i);
    }
    this.previous = this.slides.length - 1;
    this.next = this.selected + 1;
  }

  ngOnInit(): void {
    if (localStorage.getItem('loggedin') !== 'true') {
      this.router.navigate(['login']);
    }
  }


  slidePrevious() {
    if (this.selected === 0) {
      this.selected = this.slides.length - 1;
    } else {
      this.selected = this.selected - 1;
    }
    this.setPrevNext();
  }
  slideNext() {
    if (this.selected === this.slides.length - 1) {
      this.selected = 0;
    } else {
      this.selected = this.selected + 1;
    }
    this.setPrevNext();
  }
  setPrevNext() {
    const next = this.selected + 1;
    const prev = this.selected - 1;
    this.previous = prev < 0 ? this.slides.length - 1 : prev;
    this.next = next < this.slides.length ? next : 0;

  }

  onClickCard(i) {
    this.selected = i;
    this.setPrevNext();
  }
  logOut(){
    this.router.navigate(['login']);
    localStorage.removeItem('loggedin');
    localStorage.removeItem('username');
  }

}
