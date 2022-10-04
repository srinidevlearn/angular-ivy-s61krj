import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Gender } from './custom.validator';
import { IPickMappedForm, IPickMappedFormValues } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    setTimeout(() => {
      this.updateForm();
    }, 5000);
  }

  updateForm() {
    let data: IPickMappedFormValues = {
      name: 'Srini',
      age: 20,
      gender: 'M',
      role: 'Admin',
      canAccess: true,
    };
    this.myForm.patchValue({ ...data });
  }

  createForm() {
    this.myForm = this.fb.group<IPickMappedForm>({
      name: ['', [Validators.required]],
      age: [null, [Validators.min(18), Validators.max(60)]],
      gender: [null, [Gender()]],
      role: ['', []],
      canAccess: [false, []],
    });
  }
}