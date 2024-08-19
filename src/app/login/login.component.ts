import { Component, inject, OnInit } from '@angular/core';

import {  Router, RouterModule, RouterOutlet } from '@angular/router';

import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { FormsModule,NgForm} from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
 
   private authService=inject(AuthService); 
   private router = inject(Router);
   
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }

  onSubmit(form: NgForm) {
    console.log('inside on submit', form.value);
      this.authService.login(form.value).subscribe(
        {
          next: (response) => {
            if(response) {
              alert('Login successful');
              this.router.navigate(['/dashboard']);
            } else {
              alert('Login Failed');
              
            }
          }

        
  });
   
  

 

}


}
