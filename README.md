
# Lead Front-End Position Code Challenge

This is a front-end code challenge created to serve two purposes:

1. Show off your skills.
2. Give us a better understanding of your skills.

Please feel free to contact us by mailing *shlomi@rethinkedge.com* with any questions! 😊

## How to Submit
1. Fork this repository.
2. Leave comments where you were not sure how to properly proceed.
3. Write a quick feedback on the challenge.
4. After you're done, provide us the link to your repository.

## The Challenge
The code challenge focuses on building web application (SPA) of a library! 📚

In the library, users are able to view a list of books, view all the photos of a single book, and add photos to books as-well.

### Specification

* The application contains 2 routes:
	* Main page, displays a list of 5 books. Every book in the list will contain one of the book's photos (if the book has any photos), the book's title and author. 
	* Single book page, which displays the book's title, author, all of the book's photos (if the book has any photos), and a form to add a photo to the book.
* Clicking on one of the books from the main page should navigate to the book's page.
* All of the relevant data will be sent and received from the public API http://jsonapiplayground.reyesoft.com/
	* Fetching all books - GET http://jsonapiplayground.reyesoft.com/v2/books
	* Fetching a single book -  GET http://jsonapiplayground.reyesoft.com/v2/books/:id
	* Adding photos to a single book - POST http://jsonapiplayground.reyesoft.com/v2/books/:id/relationships/photos
* The public API is based on the JSON:API Specification - https://jsonapi.org/
* Displaying books on the main page should be as close as possible to the following layout:
![Main Page Books Layout](https://i.ibb.co/w77fHDw/Frontend-Lead-Position-Books-Layout.jpg)

	*Example of a book without any photos, and a book with photos. In case a book has more than one photo, the number of additional photos will be displayed as the example above*

**NOTE:** Except for the main page books display layout mentioned above, there are no additional UI-specific instructions.

### Additional Instructions

* You **must** use ReactJS
* You **must** use ES6 and above JavaScript syntax
* You **must** use a UI library (*of your choice*)
* You **must** use a state management library (*of your choice*)
* *Feel free* to use Starter Kits such as [Create React App](https://github.com/facebook/create-react-app)

### Things We Care About

* Clean code
* Decoupling data, UI logic and UI presentation 
* Documentation and comments
* Componential and reusabillity thinking

### Bonus Points

* Usage of [Material Components for React](https://github.com/material-components/material-components-web-react) or [Material-UI](https://material-ui.com/) (UI libraries)
* Usage of [MobX](https://mobx.js.org/) (State management library)
* Responsiveness
* Tests
* Linter (and more specifically - [Airbnb JavaScript style guide](https://github.com/airbnb/javascript)) 
* Modern best practices/coding patterns
* S.O.L.I.D Principles

## Feedback
We would love to get feedback from you on this challenge, either via email, phone call, or even in the fork's *readme file*:
* Did you enojy doing the challenge? if so, from which parts?
* How long did it take you to complete the challenge?
* Did you find the challenge too difficult? too easy?
* Do you believe the challenge was too demanding? too long to complete?
* If you could, what would you change in the challenge?

### GOOD LUCK, YOU GOT THIS! 😁
