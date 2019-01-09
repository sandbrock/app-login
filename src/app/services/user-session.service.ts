import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  constructor() { }

  UserName: string;

  IsUserLoggedIn(): boolean {
    return !!this.UserName;
  }
}
