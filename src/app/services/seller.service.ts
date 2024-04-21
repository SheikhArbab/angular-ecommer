import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SignUp } from '../types';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLogedIn = new BehaviorSubject<boolean>(false)

  constructor(private http : HttpClient, private route : Router) { }

  userSignUp(data: SignUp) {

    this.http.post("http://localhost:3000/seller", data).subscribe(res => {
      if (res) { 
        localStorage.setItem("seller",JSON.stringify(res))
        this.isSellerLogedIn.next(!this.isSellerLogedIn.value)
        this.route.navigate(['seller-home'])
      }

    })


  }

}
