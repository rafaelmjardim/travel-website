import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

import { SignDialogComponent } from './sign-dialog/sign-dialog.component';

import { MatDialog } from "@angular/material/dialog";
type NewUser = {
  userName: string,
  password: string,
  email: string
}

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  signForm!: FormGroup;
  newUser!: NewUser;

  constructor(private form_builder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    
    this.signForm = this.form_builder.group({
      userNameInput: [''],
      emailInput: [''],
      passwordInput: ['']
    })
  }

  handleClick = () => {
    const userNameInput = this.signForm.controls['userNameInput'].value;
    const emailInput = this.signForm.controls['emailInput'].value;
    const passwordInput = this.signForm.controls['passwordInput'].value;

    this.newUser = {
      userName: userNameInput,
      email: emailInput,
      password: passwordInput
    }
    
    if(this.newUser.userName && this.newUser.email && this.newUser.password) {
     
      this.dialog.open(SignDialogComponent, {
        width: '50rem',
        height: '20rem'
      });

    }
  }

}
