import { User } from "./User";

export class Paciente {
  constructor(
    public id: number,
    public age: string,
    public phone: string,
    public address: string,
    public user: User
  ) {}
}
