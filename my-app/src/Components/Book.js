import React from 'react';
import { Card } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'
import { Link } from "react-router-dom";
import '../Style/Book.css';

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
        return `url('${photos[0].attributes.uri}')`;
    } else {
        return 'none';
    }
}

function fetchAllPhotos(bookPhotos, allPhotos){
    const photos = allPhotos.filter(photo => {
        return bookPhotos.some(bookPhoto => photo.id === bookPhoto.id);
    });
    return photos;
}

const Book = (props) => {
    const imagesAmount=props.bookDetails.relationships.photos.data.length;
    return (
        <Link to={{
            pathname: `/bookInfo/${props.bookDetails.id}`,
            state: { 
                author: checkForAuthor(props.bookDetails.relationships.author.data.id, props.authors),
                photos: fetchAllPhotos(props.bookDetails.relationships.photos.data, props.photos),
                book :props.bookDetails
             }
          }}>
            <Card border="secondary" className="book" style={{
                backgroundImage: checkForPhotos(props.bookDetails.relationships.photos.data, props.photos)
            }}>
                <div className="book-content">
                    <div className="book-content-center">
                        <Card.Title>{props.bookDetails.attributes.title}</Card.Title>
                        <Card.Text>
                            {checkForAuthor(props.bookDetails.relationships.author.data.id, props.authors)}
                        </Card.Text>
                    </div>
                    
                </div>


                {
                    
                    imagesAmount> 1?
                            <Badge pill variant="secondary">
                                +{imagesAmount-1}
                            </Badge> : null
                        
                    
                }


            </Card>
        
        </Link>
    );
}

export default Book;