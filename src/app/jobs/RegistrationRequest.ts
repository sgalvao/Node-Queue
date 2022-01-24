
export default {
    key: 'RegistrationRequest',
   async handle(job:{ name: string; email: string; password: string } ) {
        const {email, name, password} = job;

        const user = {
            name,
            email,
            password,
        }

        const sendEmail = () => {
            console.log(`Enviando email para ${user.email}`);
        }


      return sendEmail();
    }
}