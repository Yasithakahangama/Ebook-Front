import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public router: Router, private toastr: ToastrService, public auth:AuthenticationService) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('userToken'); 
    this.router.navigateByUrl('/');
    this.toastr.info("Good Bye ","",{
      timeOut: 2000,
    });
  }

}
