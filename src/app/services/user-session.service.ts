import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  constructor() { }

  userName: string;

  isUserLoggedIn(): boolean {
    return !!this.userName;
  }
}
