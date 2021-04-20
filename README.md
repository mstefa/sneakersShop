<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="client/public/zapatillas-de-deporte.png" alt="Logo" width="80" height="80">

  <h3 align="center">Sneakers Shop</h3>

  <p align="center">
    
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#built-with">Built With</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li>
      <a href="#api">API</a>
    </li>
    <li>
      <a href="#license">License</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

It is a project launched in just one month and carried out by a team of nine developers in the context of the <a href='https://www.soyhenry.com/'>Henry bootcamp </a>. The aim of the project was to create an e-commerce from scratch as a final project of the Henry Bootcamp. On it, it was decided to use TypeScript and GraphQL and the thecnologies metion on <a href="#built-with">Built With</a> .

<p align="center">
    <img src="https://media.giphy.com/media/fy8jhhkG1sVbNpVC73/giphy.gif" alt="Logo" width="500" height="320">
</p>

You can visit a running deployment <a href='https://shoes-g1.vercel.app/'>here</a>

<!-- <p align="center">
    <img src="public/movie.gif" alt="Logo" width="500" height="320">
</p> -->


I look forward to your feedback and comments on the code, architecture improvements and/or any general suggestions.


### Built With

Main libraries/repositories used on this proyects are:

* [React](https://reactjs.org/)
* [React Router](https://reactrouter.com/)
* [Apollo/GraphQL](https://www.apollographql.com/)
* [Expressjs](https://expressjs.com/)
* [sequelize](https://sequelize.org/) and its <a href = 'https://github.com/RobinBuschmann/sequelize-typescript'>implementation on typescript</a>
* [Styled Components](https://styled-components.com/)


## Stripe configuration.

In order to get fulll funtionality of the payment system of the app, it is necesary to install Stripe Cli. Information about the instalation could be found here: https://stripe.com/docs/stripe-cli.

### For windowds users:


1- Download the latest windows tar.gz file from https://github.com/stripe/stripe-cli/releases/latest

2- Unzip the stripe_X.X.X_windows_x86_64.zip file

3- Run the unzipped .exe file

### for unix based with apt:

`sudo apt-key adv --keyserver hkp://pool.sks-keyservers.net:80 --recv-keys 379CE192D401AB61`

`echo "deb https://dl.bintray.com/stripe/stripe-cli-deb stable main" | sudo tee -a /etc/apt/sources.list`

`sudo apt-get update`

`sudo apt-get install stripe`

### Login 

After installing the Stripe CLI, you must pair it with your Stripe account. To do so, run stripe login in the terminal. You’ll be prompted to launch your browser and login to the Stripe Dashboard to grant the Stripe CLI access to your account.

`stripe login`

### Redirecting to our app

To be able to listen the events, it is necesary to forward received events to our server wirten on console:

`stripe listen --forward-to localhost:3001/webhook`

If all works fine, it will response a message like:

`Ready! Your webhook signing secret is '{{WEBHOOK_SIGNING_SECRET}}' (^C to quit)`

<!-- LICENSE -->
## License

Distributed under the MIT License. See `License.txt` for more information.

<!-- CONTACT -->
## Contact

Matías Stefanutti - 
[Linkedin](https://www.linkedin.com/in/matiasstefanutti/)

Twitter: [@mstefanutti](https://twitter.com/mstefanutti)

