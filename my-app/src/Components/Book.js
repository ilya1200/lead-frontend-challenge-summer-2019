import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'
import { Link } from "react-router-dom";
import '../Style/Book.css';
import axios from 'axios';
import config from './config';



class Book extends Component {
    state = {
        authors: [],
        photos: []
    }

    checkForAuthor() {
        if (this.state.authors && this.state.authors.length > 0) {
            return this.state.authors[0].attributes.name;
        } else {
            return 'Unknown';
        }
    }

    checkForPhoto(){
        if (this.state.photos && this.state.photos.length > 0) {
            return `url('${this.state.photos[0].attributes.uri}')`;
        } else {
            return 'none';
        }
    }

    componentDidMount() {

        axios.all([
            axios.get(config.fetchBooks+ `/${this.props.bookDetails.id}/author`),
            axios.get(config.fetchBooks+ `/${this.props.bookDetails.id}/photos`)
        ])
            .then(axios.spread((resAuthors, resPhotos) => {
                this.setState({
                    authors: resAuthors.data.data,
                    photos:resPhotos.data.data
                });
            }));


    }

    render() {
        return (
            <Link to={{
                pathname: `/bookInfo/${this.props.bookDetails.id}`,
                state: { 
                    author: this.state.authors,
                    photos: this.state.photos,
                    book :  this.props.bookDetails
                 }
              }}>
                <Card border="secondary" className="book" style={{  
                    backgroundImage: this.checkForPhoto()
                }}>
                    <div className="book-content">
                        <div className="book-content-center">
                            <Card.Title>{this.props.bookDetails.attributes.title}</Card.Title>
                            <Card.Text>
                                {this.checkForAuthor()}
                            </Card.Text>
                        </div>
                        
                    </div>
    
    
                    {
                        
                        (this.state.photos && this.state.photos.length > 1) ?
                                <Badge pill variant="secondary">
                                    +{this.state.photos.length-1}
                                </Badge> : null
                            
                        
                    }
    
    
                </Card>
            
            </Link>
        );
    }
}

// ----------------------------

// function checkForAuthor(authorId, authors) {
//     const bookAuthor = authors.filter(author => author.id === authorId);
//     if (bookAuthor.length > 0) {
//         return bookAuthor[0].attributes.name;
//     } else {
//         return 'Unknown';
//     }
// }

// function checkForPhotos(bookPhotos, allPhotos) {
//     const photos = allPhotos.filter(photo => {
//         return bookPhotos.some(bookPhoto => photo.id === bookPhoto.id);
//     });
//     if (photos.length > 0) {
//         return `url('${photos[0].attributes.uri}')`;
//     } else {
//         return 'none';
//     }
// }

// function fetchAllPhotos(bookPhotos, allPhotos){
//     const photos = allPhotos.filter(photo => {
//         return bookPhotos.some(bookPhoto => photo.id === bookPhoto.id);
//     });
//     return photos;
// }

// const Book = (props) => {
//     const imagesAmount=props.bookDetails.relationships.photos.data.length;
//     return (
//         <Link to={{
//             pathname: `/bookInfo/${props.bookDetails.id}`,
//             state: { 
//                 author: checkForAuthor(props.bookDetails.relationships.author.data.id, props.authors),
//                 photos: fetchAllPhotos(props.bookDetails.relationships.photos.data, props.photos),
//                 book :props.bookDetails
//              }
//           }}>
//             <Card border="secondary" className="book" style={{
//                 backgroundImage: checkForPhotos(props.bookDetails.relationships.photos.data, props.photos)
//             }}>
//                 <div className="book-content">
//                     <div className="book-content-center">
//                         <Card.Title>{props.bookDetails.attributes.title}</Card.Title>
//                         <Card.Text>
//                             {checkForAuthor(props.bookDetails.relationships.author.data.id, props.authors)}
//                         </Card.Text>
//                     </div>
                    
//                 </div>


//                 {
                    
//                     imagesAmount> 1?
//                             <Badge pill variant="secondary">
//                                 +{imagesAmount-1}
//                             </Badge> : null
                        
                    
//                 }


//             </Card>
        
//         </Link>
//     );
// }

export default Book;