import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms'

type NewUser = {
  userName: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
