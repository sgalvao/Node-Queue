export default {
  async store(
    req: { body: { name: any; email: any; password: any } },
    res: { json: (arg0: { name: any; email: any; password: any }) => any }
  ) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    // adicionar usuario na fila de atendimento

    

    return res.json(user);
  },
};
