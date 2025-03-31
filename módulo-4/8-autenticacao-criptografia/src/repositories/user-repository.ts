import { pool } from "../pool";

type TUserProps = {
  id: string;
  name: string;
  email: string;
  password: string;
};

type TUserUpdateProps = {
  name: string;
  email: string;
  password: string;
};

export default class UserRepository {
  async findByEmail(email: string) {
    const query = "SELECT * FROM users WHERE email = $1";
    const { rows } = await pool.query(query, [email]);
    return rows[0];
  }

  async findById(id: string) {
    const query = "SELECT * FROM users WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }

  async find() {
    const query = "SELECT * FROM users";
    const { rows } = await pool.query(query);
    return rows;
  }

  async create(props: TUserProps) {
    const query =
      "INSERT INTO users (id, name, email, password) VALUES ($1, $2, $3, $4)";
    await pool.query(query, [
      props.id,
      props.name,
      props.email,
      props.password,
    ]);
  }

  async delete(id: string) {
    const query = "DELETE FROM users WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }

  async update(id: string, props: TUserUpdateProps) {
    const query =
      "UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4";
    await pool.query(query, [props.name, props.email, props.password, id]);
  }
}
