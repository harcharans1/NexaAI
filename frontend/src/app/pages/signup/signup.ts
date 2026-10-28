
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
  fullName = '';
  email = '';
  businessName = '';
  password = '';
  confirmPassword = '';
  showPassword = false;
  acceptedTerms = false;
  errorMessage = '';

  onSubmit(): void {
    this.errorMessage = '';

    if (
      !this.fullName.trim() ||
      !this.email.trim() ||
      !this.businessName.trim() ||
      !this.password ||
      !this.confirmPassword
    ) {
      this.errorMessage = 'Please complete all required fields.';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email.trim())) {
      this.errorMessage = 'Please enter a valid business email.';
      return;
    }

    if (this.password.length < 8) {
      this.errorMessage = 'Password must contain at least 8 characters.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Your passwords do not match.';
      return;
    }

    if (!this.acceptedTerms) {
      this.errorMessage = 'Please accept the terms to continue.';
      return;
    }

    this.errorMessage =
      'Registration API is not connected yet. Your account has not been created.';
  }
}
