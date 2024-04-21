import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service'; 
import { SignUp } from 'src/app/types';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller : SellerService) { }

  ngOnInit(): void { }

  signUp(data: SignUp): void {

    this.seller.userSignUp(data) 

  }

}
