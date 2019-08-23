import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'ngp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  validateForm: any;
  @Output() login$ = new EventEmitter();

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.login$.emit(this.validateForm.value);
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

}
