import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  modelForm: FormGroup;

  valCheck: string[] = ['remember'];

  password: string;

  constructor(
    public layoutService: LayoutService, 
    private fb: FormBuilder,
    private authService: AuthService,
    private router:Router
  ) {
      this.modelForm=this.createForm();
  }
  createForm(): FormGroup {
      return this.fb.group({
          name: [''],
          surname: [''],
          password: [''],
          email: ['']
      });
  }
  register(){
    this.authService.register(this.modelForm.value).subscribe({
      next: (a)=>{
        this.authService.showCreateSuccess();
        this.router.navigateByUrl('/auth/login');
      },
      error: (err:Error)=>{
      },
    })
  }
}
