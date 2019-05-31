import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Book from './Book';
import axios from 'axios';
import config from './config';

class BookShelf extends Component {
    state = {
        books: [],
        authors: [],
        photos: []
    }

    componentDidMount() {

        axios.all([
            axios.get(config.fetchBook),
            axios.get(config.fetchAuthors),
            axios.get(config.fetchPhotos)
        ])
            .then(axios.spread((resBooks, resAuthors, resPhotos) => {


                this.setState({ 
                    authors: resAuthors.data.data,
                    books: resBooks.data.data,
                    photos : resPhotos.data.data
                 });
            }));


    }

    render() {
        return (
            <Jumbotron>

                <Carousel>
                    {
                        this.state.books.map(book => (
                            <Carousel.Item key={book.id}>
                                <Book bookDetails={book} 
                                authors={this.state.authors}
                                photos={this.state.photos}
                                ></Book>
                            </Carousel.Item>
                        ))
                    }

                </Carousel>
            </Jumbotron>
        );
    }
}

export default BookShelf;