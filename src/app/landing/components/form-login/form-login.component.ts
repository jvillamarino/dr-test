import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from './../../../shared/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  form: FormGroup;
  isLoading:boolean = false;

  constructor(
    formBuilder: FormBuilder,
    private authService:AuthenticationService,
    private snackBar:MatSnackBar,
    private router: Router
    ) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }

  ngOnInit() {
  }

  emailLogin(){
    this.isLoading = true;
    let email:string = this.form.get('email').value;
    let password: any = this.form.get('password').value;

    this.authService.login(email,password).then(res => {
      this.isLoading = false;
      this.snackBar.open(`Welcome ${res.user.email}`,'', {duration:2000})
      this.router.navigate(['/app']);
    }).catch( error =>{
      this.isLoading = false;
      this.snackBar.open(error, 'Try', {duration:2000})
    }
    );
  }
  googleLogin(){
    this.isLoading = true;
    this.authService.loginWithGoogle().then(res =>{
      this.isLoading = false;
      this.snackBar.open(`Welcome ${res.user.displayName || res.user.email}`,'',{duration:2000});
      this.router.navigate(['/app']);
    }).catch(error => {
      this.isLoading = false;
      this.snackBar.open(error,'', {duration:2000});
    })
  }

}
