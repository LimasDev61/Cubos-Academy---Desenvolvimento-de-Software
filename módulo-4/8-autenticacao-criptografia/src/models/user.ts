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
    this.email = props.email;
    this.password = props.password;
  }
}
