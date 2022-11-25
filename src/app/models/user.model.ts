export interface UserModel {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  name:{
    readonly firstname: string;
    readonly lastname: string;
  }
  address:{
    readonly city: string;
    readonly street: string;
    readonly number: string;
    readonly zipcode: string;
  }
  readonly phone: string;
}
