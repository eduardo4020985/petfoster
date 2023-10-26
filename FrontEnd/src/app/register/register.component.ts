import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  form: any = {};
  isRegisterFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const { username, city, state, website, email, password } = this.form;
    const location = city + ' - ' + state;
    console.log(email)
    this.authService.register(username, email, website, location, password).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      (error) => {
        if (error.error && error.error.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = 'Erro desconhecido';
        }
        this.isRegisterFailed = true;
      }
    );
  }
}
