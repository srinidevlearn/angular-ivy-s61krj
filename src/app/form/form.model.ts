import { FormControl, ValidatorFn, Validators } from '@angular/forms';

export interface IUser {
  name: string;
  age: number;
  gender: 'M' | 'F';
  phoneNumber: string;
  email: string;
}

export interface IFormUser extends IUser {
  role: string;
  canAccess: boolean;
}

export type IMappedForm<T> = {
  [P in keyof T]: [T[P] | null, (Validators | ValidatorFn)[]?];
};

export type IPickMappedForm = Pick<
  IMappedForm<IFormUser>,
  'name' | 'age' | 'gender' | 'role' | 'canAccess'
>;

export type IPickMappedFormValues = Pick<
  IFormUser,
  'name' | 'age' | 'gender' | 'role' | 'canAccess'
>;
