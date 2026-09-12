import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordRequest } from '../../models/forgot-password.model';

@Component({
  selector: 'app-forgot-password-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.scss'
})
export class ForgotPasswordFormComponent {
  forgotPasswordForm: FormGroup;
  isSubmitting = false;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.invalid) {
      this.markFormGroupTouched(this.forgotPasswordForm);
      return;
    }

    this.isSubmitting = true;
    const forgotPasswordData: ForgotPasswordRequest = this.forgotPasswordForm.value;

    // TODO: Appeler le service de réinitialisation de mot de passe
    console.log('Demande de réinitialisation:', forgotPasswordData);

    setTimeout(() => {
      this.isSubmitting = false;
      this.isSubmitted = true;
      this.forgotPasswordForm.reset();
    }, 1000);
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }

  get email() { return this.forgotPasswordForm.get('email'); }
}
