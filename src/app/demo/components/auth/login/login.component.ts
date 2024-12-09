import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {
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
            password: []
        });
    }
    register(){
        this.authService.login(this.modelForm.get('email').value, this.modelForm.get('password').value).subscribe({
            next: (a)=>{
                this.authService.showNotification("Confirmation sended to your email! ");
                // this.verifyEmail(this.modelForm.get('email').value);
                this.router.navigateByUrl('/');
            },error: (err)=>{
                console.log(err);
                this.authService.showNotification("Confirmation sended to your email! ");
            }
        })
    }
    private verifyEmail(email: string){
        this.authService.verifyEmail(email).subscribe({
            next: (a)=>{
                // console.log(a);
            },error: (err: Error)=>{

            }
        })

    }
}
