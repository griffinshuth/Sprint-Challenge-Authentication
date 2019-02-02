# Sprint Challenge: Authentication - Dad Jokes

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored Authentication. During this Sprint, you studied Introduction to Authentication, Using Sessions and Cookies, Using JSON Web Tokens (JWT), and Client-side Authentication. In your challenge this week, you will demonstrate proficiency by creating an application that will give you a list of random dad jokes, as long as you are authorized.

- **DISCLAIMER** Authentication is a subject that many people spend a large amount time throughout their careers obtaining knowledge over. This is not something we expect you to have a mastery over, rather, we're preparing you to be able have an intelligent conversation about the subject.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency w/ Authentication and your command of the concepts and techniques in the Introduction to Authentication, Using Sessions and Cookies, Using JSON Web Tokens (JWT), and Client-side Authentication modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are currently locked out.

Implement an User Authentication System in order to access the jokes from the Jokes API that we want to consume. You will need to ensure that your system uses `bcrypt` for hashing and encrypting your user's passwords, as well as JWT for handling the authorization aspect of the app.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1.  What is the purpose of using sessions?

Sessions are a way of verifying a user’s identity to authorize their access to certain portions of a website. A session is created when the user logs in (initially verifies their identity) and is valid for a period of time. The session has an ID that it will check for on the cookie being passed with each request from the client. If the server ID matches, the user is verified and continues to have access. The session is stored on the server, not with the client.

2.  What does bcrypt do to help us store passwords in a secure manner.

Bcrypt allows us to hash passwords and other sensitive user data before storing it within our database, to ensure that any breach into our database does not give the hacker access to that sensitive data. Bcrypt also has built in methods to compare a user’s attempted login password to the hashed password on the database, without revealing the sensitive information.

3.  What does bcrypt do to slow down attackers?

Bcrypt slows down hackers in a few ways. First, its hashing method is a one way function, so a hacker cannot use Bcrypt in reverse to de-hash sensitive data, even if they have access to the database. Bcrypt also uses salt when hashing sensitive data - which adds random data to the user input to make it even more difficult to de-code. Bcrypt also has a built in parameter to ensure that passwords are of a certain length before being hashed, to provide greater security for the user.

4.  What are the three parts of the JSON Web Token?

A JSON web token contains three main parts: the header, the payload and the signature. The header contains the algorithm type and that the token is JWT type. The payload contains user information and additional data, such as the subject, expiration, or roles. Finally, the signature is created by running the header’s specified algorithm on the header, payload and with a secret to create a unique signature that verifies that user’s identity as valid. In its entirety, the JSON web token is made up of those three strings that will be sent with the header on each client side request.

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] `cd` into the root of the project and run `yarn` to install dependencies.
- [ ] Once you have your `node_modules` go ahead and run `yarn server` or `npm run server` to start your node server.
- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.

Helpful Tip on Testing this Project:

- [ ] **TEST** this project using **`POSTMAN`**.

## Minimum Viable Product

- [ ] Implement the `register` function inside `/config/routes.js`.
- [ ] Implement the `login` function inside `/config/routes.js`.
- [ ] Use JSON Web Tokens for authentication.

**Note** The migrations and a database with empty users is already included

- [ ] Add the authentication related code. If every is done correctly, visiting `/api/jokes` should return a list of jokes.

## Stretch Problem: Build a front end to interface with your User Auth System

- Add a React client that connects to your API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- Once you have the functionality down, style it!
