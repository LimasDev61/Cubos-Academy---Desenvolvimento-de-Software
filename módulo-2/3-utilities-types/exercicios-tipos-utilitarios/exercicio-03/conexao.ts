type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}

const conexao = (dados: Required<Conn>) => {
    const { username, password, host, port, dbname } = dados;
    return {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    };
}