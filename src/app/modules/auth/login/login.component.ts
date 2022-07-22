import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { delay, take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public showPassword = false;
  public form: FormGroup;
  public controlsMinLength = 8;

  constructor(private authService: AuthService, private router: Router) { }

  public ngOnInit(): void {
    this.buildForm();
  }

  public onSubmit(): void {
    if (this.form.valid) {
      const { login, password } = this.form.getRawValue();
      this.authService.login(login, password).pipe(
          delay(150),
          take(1)
        ).subscribe(() => this.router.navigate(['pets']));
    }
  }

  public showHidePassword(): void {
    this.showPassword = !this.showPassword;
  }

  private buildForm(): void {
    this.form = new FormGroup({
      login: new FormControl('', { validators: [Validators.required, Validators.minLength(this.controlsMinLength)] }),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(this.controlsMinLength)] }),
    }, { updateOn: 'submit' })
  }

}
