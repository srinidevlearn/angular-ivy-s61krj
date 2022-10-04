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
import {
  IAddress,
  IMappedForm,
  IPickMappedForm,
  IPickMappedFormArray,
  IPickMappedFormValues,
} from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  availableRoles: string[] = ['admin', 'manager', 'naive', 'member'];
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
      role: ['Admin'],
      canAccess: true,
      // address: [{ city: 'chennai', pincode: '600091' }],
    };
    this.myForm.patchValue({ ...data });
  }

  createForm() {
    this.myForm = this.fb.group<IPickMappedForm>({
      name: ['', [Validators.required]],
      age: [null, [Validators.min(18), Validators.max(60)]],
      gender: [null, [Gender()]],
      role: [[], []],
      canAccess: [false, []],
      // address: this.fb.array<IPickMappedFormArray<IAddress[]>>([]),
    });
  }
}
