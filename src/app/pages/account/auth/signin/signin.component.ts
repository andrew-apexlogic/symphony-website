import { Component, OnInit, inject } from '@angular/core'
import { AuthLayoutComponent } from '../auth-layout.component'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { Store } from '@ngrx/store'
import { login } from '@store/authentication/authentication.actions'
import { createdBy, developedByLink } from 'src/app/states/constants'

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    AuthLayoutComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup
  formSubmitted: boolean = false
  showPassword: boolean = false
  author = createdBy
  developBy = developedByLink
  store = inject(Store)

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['user@domain.com', [Validators.required, Validators.email]],
      password: ['password', Validators.required],
    })
  }

  /**
   * convenience getter for easy access to form fields
   */
  get formValues() {
    return this.loginForm.controls
  }

  /**
   * On submit form
   */
  onSubmit(): void {
    this.formSubmitted = true

    if (this.loginForm.valid) {
      const email = this.formValues['email'].value // Get the username from the form
      const password = this.formValues['password'].value // Get the password from the form

      // Login Api
      this.store.dispatch(login({ email: email, password: password }))
    }
  }
}
