import { Router } from '@angular/router';
import { AuthenticationService } from '../../../shared/service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  form: FormGroup;
  isLoading:boolean = false;
  btnText:string = 'Sign Up';

  constructor(formBuilder: FormBuilder, private authService: AuthenticationService, private router: Router, private snackBar: MatSnackBar) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }

  ngOnInit() {
  }

  signUp() {
    this.btnText = 'Processing'
    this.isLoading = true;
    let email: string = this.form.get('email').value;
    let password: any = this.form.get('password').value;
    this.authService.register(email, password).then(res => {
      this.isLoading = false;
      this.router.navigate(['/authentication/login'])
      this.snackBar.open(`El email: ${email} ha sido registrado con exito`, 'Ok', {
        duration:3000,
        horizontalPosition:'left',
        verticalPosition: 'top'
      })
    }).catch( error=>{
      this.isLoading = false;
      this.btnText = 'Sign Up';
      this.snackBar.open(error,'Try', {duration:3000});
    })
  }

}
