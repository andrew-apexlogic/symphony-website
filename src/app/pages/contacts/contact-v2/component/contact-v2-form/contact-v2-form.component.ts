import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
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
  contactForm!: FormGroup;
  isSubmitting = false;
  successMessage = '';

  constructor(private fb: FormBuilder, private emailService: EmailService) { }

  ngOnInit(): void {
    // Initialize the form correctly
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Fix here
      phone: ['', Validators.required],
      organization: ['', Validators.required],
    });
  }

  get formControl() {
    return this.contactForm.controls;
  }

  submitForm() {
    console.log("CONTACT FORM 1: ", this.contactForm.value);

    if (this.contactForm.valid) {
      console.log("CONTACT FORM 2: ", this.contactForm.value);

      this.isSubmitting = true;
      this.emailService.createTicket(this.contactForm.value).subscribe({
        next: () => {
          this.successMessage = 'Your request has been sent to Freshdesk!';
          this.contactForm.reset();
          // this.isSubmitting = false;
        },
        error: (err) => {
          console.error('Error sending request to Freshdesk:', err);
          // this.isSubmitting = false;
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
      console.log('Form is invalid:', this.contactForm);
    }
  }
}
