import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from './../../shared/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'core-layout',
  templateUrl: './core.layout.html',
  styleUrls: ['./core.layout.scss']
})
export class CoreLayout implements OnInit {
  sidenavMode$: Observable<string>;
  user:any;
  constructor(
    private mediaObserver: MediaObserver,
    private authService:AuthenticationService,
    private snackBar:MatSnackBar
    ) { }

  ngOnInit() {
    this.sidenavMode$ = this.mediaObserver.media$.pipe(
      map(mediaChange =>
        this.mediaObserver.isActive('lt-md') ? 'over' : 'side'
      )
    );
    this.user = this.authService.isUserLoggedIn();
    console.log(this.user);
  }

  onLogout(){
    this.authService.logout().then(res =>{
      this.snackBar.open('Sesión cerrada', '', {duration:2000, horizontalPosition:'left', verticalPosition:'top'})
    });
  }

}
