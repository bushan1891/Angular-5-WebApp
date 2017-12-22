import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';    

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  sendMeProjects() {
    this.router.navigate(['projects']);
  }
  sendMeAbout() {
    this.router.navigate(['about']);
  }
  sendMeContact() {
    this.router.navigate(['contact']);
  }
  sendMeHome() {
    this.router.navigate(['']);
  }
}
