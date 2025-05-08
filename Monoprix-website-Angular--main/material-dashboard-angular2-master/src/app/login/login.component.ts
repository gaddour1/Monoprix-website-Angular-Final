import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

// Permet d'utiliser jQuery
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('logoAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s ease-in-out', style({ opacity: 1 })),
        animate('1.5s ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  rememberMe = false;
  showLogo = true;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('rememberMe')) {
      const savedEmail = localStorage.getItem('email');
      const savedPassword = localStorage.getItem('password');
      if (savedEmail && savedPassword) {
        this.loginForm.patchValue({
          email: savedEmail,
          password: savedPassword
        });
        this.rememberMe = true;
      }
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      if (email === 'daf@daf.tn' && password === 'daf123') {
        this.router.navigate(['/financial']);
      } else if (email === 'supplier' && password === 'supplier123') {
        this.router.navigate(['/SupplierFinancial']);
      } else if (email && password) {
        this.router.navigate(['/dashboard']);
      }

      if (this.rememberMe) {
        localStorage.setItem('rememberMe', 'true');
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('rememberMe');
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
