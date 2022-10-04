import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export interface IUser {
  name: string;
  age: number;
  gender: 'M' | 'F';
  phoneNumber: string;
  email: string;
}

export interface IAddress {
  city: string;
  pincode: string;
}

export interface IFormUser extends IUser {
  role: string[];
  canAccess: boolean;
  address: IAddress[];
}

export type IMappedForm<T> = {
  [P in keyof T]: [
    T[P] extends Array<T> ? T[P][] : T[P],
    (Validators | ValidatorFn)[]?
  ];
};

export type IPickMappedFormArray<T> = {
  [P in keyof T]: AbstractControl<T>[];
};

export type IReqFields =
  | 'name'
  | 'age'
  | 'gender'
  | 'role'
  | 'canAccess'
export type IPickMappedForm = Pick<IMappedForm<IFormUser>, IReqFields>;
export type IPickMappedFormValues = Pick<IFormUser, IReqFields>;
