import { randomUUID } from "node:crypto";

type TUserProps = {
  id?: string;
  name: string;
  email: string;
  password: string;
};

export default class User {
  readonly id: string;
  name: string;
  email: string;
  password: string;

  constructor(props: TUserProps) {
    this.id = props.id ?? randomUUID();
    this.name = props.name;

    if (!this.validateEmail(props.email)) {
      throw new Error("Invalid email");
    }
    this.email = props.email;
    if (!this.validatePassword(props.password)) {
      throw new Error("A senha deve ter no minimo 8 caracteres");
    }
    this.password = props.password;
  }

  private validateEmail(email: string) {
    return !!email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  private validatePassword(password: string) {
    return password.length >= 8;
  }
}
