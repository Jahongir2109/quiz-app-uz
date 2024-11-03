import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

    constructor(public layoutService: LayoutService, private fb: FormBuilder) {
        this.modelForm=this.createForm();
    }
    createForm(): FormGroup {
        return this.fb.group({
            name: [],
            surname: [],
            password: [],
            phone: []
        });
    }
}
