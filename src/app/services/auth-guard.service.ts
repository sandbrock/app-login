import { Injectable } from '@angular/core';
import { 
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
//import { Observable } from 'rxjs/observable';
import { UserSessionService } from '../services/user-session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  constructor(
    private router: Router,
    private userSession: UserSessionService
  ) { }

      //
    // Returns true if the user is allowed to access a given route.
    //
    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      var result: boolean = this.userSession.IsUserLoggedIn();
      if (!result)
          this.router.navigate(['/login']);
      return result;
  }
}
