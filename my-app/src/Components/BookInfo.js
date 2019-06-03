import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import config from './config';
import CardDeck from 'react-bootstrap/CardDeck';
import '../Style/BookInfo.css';

class BookInfo extends Component {
    state = {
        book: {
            attributes: {}
        },
        photos: [],
        newUrlPhoto: ''
    }

    componentDidMount() {
        this.setState(this.props.location.state);
    }

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }

    addPhoto = () => {
        const postAddress= config.addPhotoToBook.replace(':id',this.state.book.id);
        const newPhoto = {
            "data": {
              "type": "photos",
              "id": this.uuidv4(),
              "attributes": {
                "title": "photo name",
                "uri": this.state.newUrlPhoto
              }
            }
          };

        axios.post(postAddress, newPhoto , {
            headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json'
        }})
            .then((response) => {
                this.setState(prevState=> {
                    return {
                        photos: [...prevState.photos, newPhoto.data], 
                        newUrlPhoto: ''
                    }
                });
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.addPhoto();
    }

    updateInputValue = (e)=> {
        this.setState({newUrlPhoto: e.target.value });
    }

    render() {
        return (
            <div>
                <Link to="/">Back</Link>

                <CardDeck>

                    <Card className="book-info-card">
                        <Carousel>
                            {
                                this.state.photos.map(photo => (
                                    <Carousel.Item key={photo.id}>
                                        <Card.Img variant="top" src={photo.attributes.uri} />
                                    </Carousel.Item>
                                ))
                            }

                        </Carousel>

                        <Card.Body>
                            <Card.Title>{this.state.book.attributes.title}</Card.Title>
                            <Card.Text>
                                {this.state.author && this.state.author.length ?  this.state.author[0].attributes.name : ''}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="book-info-form">
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Enter Url</Form.Label>
                                <Form.Control type="url" placeholder="Enter Url" value={this.state.newUrlPhoto}  onChange={this.updateInputValue}/>
                            </Form.Group>


                            <Button variant="primary" type="submit" >
                                Save Photo
                            </Button>
                        </Form>
                    </Card.Body>

                </Card>

                </CardDeck>

            </div>
        );
    }

}



export default BookInfo;