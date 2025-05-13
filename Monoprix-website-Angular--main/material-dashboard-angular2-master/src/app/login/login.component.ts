
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

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

      // Vérifier les comptes prédéfinis
      if (email === 'daf@daf.tn' && password === 'daf123') {
        localStorage.setItem('role', 'DAF');
        this.router.navigate(['/financial']);
      } else if (email === 'supplier@supplier.tn' && password === 'supplier123') {
        localStorage.setItem('role', 'SUPPLIER_MANAGER'); // Updated to match SidebarComponent
        this.router.navigate(['/financial']);
      } else if (email === 'risk@risk.tn' && password === 'risk123') {
        localStorage.setItem('role', 'RISK_MANAGER'); // Updated to match SidebarComponent
        this.router.navigate(['/financial']);
      } else {
        // Vérifier les comptes enregistrés dans localStorage
        let found = false;
        for (let i = 0; i <localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith('email_')) {
            const storedEmail = localStorage.getItem(key);
            const userId = key.split('_')[1];
            const storedPassword = localStorage.getItem(`password_${userId}`);
            const storedRole = localStorage.getItem(`role_${userId}`);

            if (storedEmail === email && storedPassword === password) {
              localStorage.setItem('role', storedRole || 'DEFAULT');
              this.router.navigate(['/financial']);
              found = true;

              // Gérer "Se souvenir de moi"
              if (this.rememberMe) {
                localStorage.setItem('rememberMe', 'true');
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
              } else {
                localStorage.removeItem('rememberMe');
                localStorage.removeItem('email');
                localStorage.removeItem('password');
              }
              break;
            }
          }
        }

        if (!found) {
          alert('Email ou mot de passe incorrect');
        }
      }
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
