import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Book from './Book';
import axios from 'axios';
import config from './config';

import CardDeck from 'react-bootstrap/CardDeck';
import '../Style/BookShelf.css';

class BookShelf extends Component {
    state = {
        books: [],
        authors: [],
        photos: []
    }

    componentDidMount() {

        axios.all([
            axios.get(config.fetchBooks),
            axios.get(config.fetchAuthors),
            axios.get(config.fetchPhotos)
        ])
            .then(axios.spread((resBooks, resAuthors, resPhotos) => {


                this.setState({
                    authors: resAuthors.data.data,
                    books: resBooks.data.data,
                    photos: resPhotos.data.data
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
                                authors={this.state.authors}
                                photos={this.state.photos}
                            ></Book>
                        ))
                    }
                </CardDeck>

            </Jumbotron>
        );
    }
}

export default BookShelf;