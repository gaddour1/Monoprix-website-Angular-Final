import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { email, password, role } = this.registerForm.value;
      
      // Vérifier si l'email existe déjà pour éviter les doublons
      let emailExists = false;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('email_') && localStorage.getItem(key) === email) {
          emailExists = true;
          break;
        }
      }

      if (emailExists) {
        alert('Cet email est déjà utilisé.');
        return;
      }

      // Générer un identifiant unique basé sur le timestamp
      const userId = new Date().getTime();
      
      // Stocker les données avec des clés uniques
      localStorage.setItem(`email_${userId}`, email);
      localStorage.setItem(`password_${userId}`, password);
      localStorage.setItem(`role_${userId}`, role);

      alert('Inscription réussie !');
      this.router.navigate(['/login']);
    } else {
      alert('Veuillez remplir tous les champs correctement');
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get role() {
    return this.registerForm.get('role');
  }
}