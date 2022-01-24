
import Queue from "../libs/Queue";

export default {
  async store(
    req: { body: { name: string; email: string; password: string } },
    res: { json: (arg0: { name: string; email: string; password: string }) => any }
  ) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    await Queue.add({ user });


    console.log(await Queue.add({ user }));
  },
};
