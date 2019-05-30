import React from 'react';
import { Card } from 'react-bootstrap';

function checkForAuthor(authorId, authors) {
    const bookAuthor = authors.filter(author => author.id === authorId);
    if (bookAuthor.length > 0) {
        return bookAuthor[0].attributes.name;
    } else {
        return 'Unknown';
    }
}

function checkForPhotos(bookPhotos, allPhotos) {
    const photos = allPhotos.filter(photo => {
        return bookPhotos.some(bookPhoto => photo.id === bookPhoto.id);
    });
    if (photos.length > 0) {
        return 'url(\'' + photos[0].attributes.uri + '\')';
    } else {
        return '';//'url(\'' + 'http://i.dailymail.co.uk/i/pix/2015/09/01/18/2BE1E88B00000578-3218613-image-m-5_1441127035222.jpg' + '\')';
    }
}

const Book = (props) => {
    return (
        <Card style={{
            backgroundImage: checkForPhotos(props.bookDetails.relationships.photos.data, props.photos)
        }}>
            <Card.Title>{props.bookDetails.attributes.title}</Card.Title>
            <Card.Text>
                {checkForAuthor(props.bookDetails.relationships.author.data.id, props.authors)}
                
            </Card.Text>
        </Card>
    );
}

export default Book;