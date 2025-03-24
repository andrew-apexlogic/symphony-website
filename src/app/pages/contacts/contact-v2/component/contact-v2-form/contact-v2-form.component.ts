import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'contact-v2-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact-v2-form.component.html',
  styles: ``,
})
export class ContactV2FormComponent implements OnInit {
  contactForm!: UntypedFormGroup
  formGroup!: boolean

  isSubmitting = false;
  successMessage = '';

  constructor(private fb: FormBuilder, private emailService: EmailService) { }

  ngOnInit(): void {
    this.setupFormValidation()

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.required],
      organization: ['', Validators.required],
    })
  }

  setupFormValidation(): void {
    const forms = document.getElementsByClassName('needs-validation')

    for (const form of Array.from(forms)) {
      form.addEventListener('submit', this.validateForm.bind(this))
    }
  }

  validateForm(event: Event): void {
    const form = event.target as HTMLFormElement

    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }

    form.classList.add('was-validated')
  }

  get formControl() {
    return this.contactForm.controls
  }

  submitForm() {
    // this.formGroup = true;
    console.log("CONTACT FORM 1: ", this.contactForm);
    if (this.contactForm.valid) {

      console.log("CONTACT FORM 2: ", this.contactForm);

      this.isSubmitting = true;
      this.emailService.createTicket(this.contactForm.value).subscribe({
        next: () => {
          this.successMessage = 'Your request has been sent to Freshdesk!';
          this.contactForm.reset();
          this.isSubmitting = false;
        },
        error: (err) => {
          console.error('Error sending request to Freshdesk:', err);
          this.isSubmitting = false;
        }
      });
      this.formGroup = false;
    }
  }
}
