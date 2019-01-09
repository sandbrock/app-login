import { Component, OnInit } from '@angular/core';

import { UserSessionService } from '../services/user-session.service';

@Component({
  selector: 'lgn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private session: UserSessionService) { }

  ngOnInit() {
  }

}
