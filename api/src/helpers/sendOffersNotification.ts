import { emailService } from "../services/emailService";
import User from "#root/db/models/users";

const sendOffersNotification = async () => {

  const users = await User.findAll();
  
  users.forEach(user => {

    if(user.nlsuscribe){
      let email = user.email;
      let name = user.firstName;
      let subject = `New discount are wating for you ${name}!!!`;
      let textToSend = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Congratulations!!! your new sneakers are in the way</title>
      </head>
      
      <body style="height: 100%; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';">
          <div style="height: 100%; padding: 2rem; background-image: url('https://www.ecestaticos.com/image/clipping/1200/675/589130e4303dfd9b515fec5163d1fe38/las-zapatillas-de-grafeno-que-duran-dos-veces-mas-que-las-normales.jpg'); background-size: 100%;">
              <div style="border-radius: 2em;text-align: -webkit-center;background: rgba(0,0,0,.5);;z-index: 1;position: relative;color: #ffffff;padding: 1.6rem;">
                  <h1 style="color: #6930C3; font-size: 3rem;margin: 0;">Sneakers Shop!</h1>
                  <p style="color: #ffffff; font-size: 1.5rem;">Hi ${name}!</p>
                  <div style="margin: 1rem 0 1rem 0; background: #6930C380; padding: .3rem;border-radius: 20rem;">
                      <span style="font-size: 1.8rem;color: #ffffff;">A new offer just started!</span>
                      <p style="font-size: 1.3rem;color: #ffffff;">visit our page to get the best prices...</p>
                  </div>
              </div>
          </div>
      </body>
      </html>
      `
      emailService(email, subject, textToSend)
    }

  });


  return true

};
export default sendOffersNotification;