import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {
  modelForm: FormGroup;

  valCheck: string[] = ['remember'];

  password!: string;

  constructor(
       public layoutService: LayoutService,
       private fb: FormBuilder,
       private authService: AuthService,
       private router: Router
      ) {
      this.modelForm=this.createForm();
  }
  createForm(): FormGroup {
      return this.fb.group({
          email: [],
          code: []
      });
  }
  register(){
      this.authService.login(this.modelForm.get('email').value, this.modelForm.get('password').value).subscribe({
          next: (a)=>{
              
              this.router.navigateByUrl('/');
          }
      })
  }
}
