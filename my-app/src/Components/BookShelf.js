import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Book from './Book';
import axios from 'axios';
import config from './config';

import CardDeck from 'react-bootstrap/CardDeck';
import '../Style/BookShelf.css';

class BookShelf extends Component {
    state = {
        books: []
    }

    componentDidMount() {

        axios.all([
            axios.get(config.fetchBooks)
        ])
            .then(axios.spread((resBooks) => {
                this.setState({
                    books: resBooks.data.data
                });
            }));


    }

    render() {
        return (
            <Jumbotron>
                <CardDeck className="book-shelf">
                    {
                        this.state.books.map(book => (
                            <Book key={book.id}
                                bookDetails={book}
                            ></Book>
                        ))
                    }
                </CardDeck>

            </Jumbotron>
        );
    }
}

export default BookShelf;