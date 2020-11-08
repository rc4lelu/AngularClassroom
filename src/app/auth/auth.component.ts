import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router} from "@angular/router";
import { Command } from 'protractor';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn(){
    this.authService.signIn();
    console.log("Connexion reussie !");
    this.authStatus = this.authService.isAuth;
    this.router.navigate(['appareils']);
  }

  onSignOut(){
    this.authService.signOut;
    console.log("Deconnexion reussie");
    this.authStatus = false;
  }



}
