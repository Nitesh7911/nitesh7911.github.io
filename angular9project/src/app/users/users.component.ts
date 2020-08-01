import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  model = new User('Nitesh', 'Nitesh');

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    
      this.router.navigate(['/home']); 
    
  }

  newUser() {
    this.model = new User('', '');
  }


}
