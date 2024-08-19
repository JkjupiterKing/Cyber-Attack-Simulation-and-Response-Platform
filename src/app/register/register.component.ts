import { Component, inject } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms';
import {  Router, RouterModule, RouterOutlet } from '@angular/router';
// import { AuthService } from '../auth.service';
// import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
//   userData = 
//   {
//     "firstName": "Nithya1",
//     "lastName": "ram",
//     "email": "prashanth.728.sri@gmail.com",
//     "password": "rama",
//     "dept": "development",
//     "position": "software developer",
//     "hiredate": "2024-04-01",
//     "birthdate": "2018-05-19",
//     "address":"koorgalli",
//     "confirmpassword": "rama"
// };


  
  private authService=inject(AuthService); 
  private router = inject(Router);
  
  onRegister(form: NgForm) {
    //  if (form.valid) {
        console.log('Registration Details:', form.value);
        this.authService.registerUser(form.value).subscribe(
        // this.authService.registerUser(this.userData).subscribe(
          // {
          {
            next: (response) => {
              console.log('Registration successful:', response);
              
              // alert('Registration successful');
               this.router.navigate(['/login']); // Navigate to login page after successful registration
            },
            error: (error) => {
              console.error('Registration failed:', error);
              alert('Registration failed. Please try again.');
            },
            complete: () => {
              console.log('Registration process completed.');
            }
          }
        );
          
        
        alert("registration successful");
        this.router.navigate(['/login']);
    //  }
    }
  }


