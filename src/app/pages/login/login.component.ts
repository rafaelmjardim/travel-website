import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms'
import { RouterLink } from '@angular/router';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';

type NewUser = {
  userName: string,
  password: string
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, MatFormField, MatLabel, MatInput, RouterLink]
})
export class LoginComponent implements OnInit {

  loginForm!: UntypedFormGroup;
  newUser!: NewUser;

  constructor(private form_builder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.form_builder.group({
      userNameInput: [''],
      passwordInput: ['']
    })
  }

  handleClick = () => {
    const userNameInput = this.loginForm.controls['userNameInput'].value;
    const passwordInput = this.loginForm.controls['passwordInput'].value;

    this.newUser = {
      userName: userNameInput,
      password: passwordInput
    }

    alert(`Bem-Vindo ${this.newUser.userName} Você está logado!`)
  }

}
