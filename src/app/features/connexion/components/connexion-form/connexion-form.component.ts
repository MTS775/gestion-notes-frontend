import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-connexion-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './connexion-form.component.html',
  styleUrl: './connexion-form.component.scss'
})
export class ConnexionFormComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password, rememberMe } = this.loginForm.value;
      console.log('Tentative de connexion avec :', email, rememberMe);

      // Simulation d'authentification réussie (à brancher sur votre API Spring Boot)
      localStorage.setItem('token', 'fake-jwt-token');

      // Redirection vers le dashboard avec sidebar
      this.router.navigate(['/app']);
    }
  }
}
