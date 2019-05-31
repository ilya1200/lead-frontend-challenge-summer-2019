import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import config from './config';

class BookInfo extends Component {
    state = {
        book: {
            attributes: {}
        },
        photos: []
    }

    componentDidMount() {
        this.setState(this.props.location.state);
    }

    addPhoto = () => {
        const postAddress= config.addPhoto.replace(':id',this.state.book.id);
        const newPhoto = {
            "data": {
              "type": "photos",
              "id": "550e8500-e29b-41d4-a716-446659448000",
              "attributes": {
                "title": "Ember Hamster",
                "uri": this.state.newUrlPhoto
              }
            }
          };
        
        axios.post(postAddress, newPhoto , {headers: {
            'Content-Type': 'application/vnd.api+json',
            Accept: 'application/vnd.api+json'
        }})
            .then(function (response) {
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
                <Card style={{ width: '18rem' }}>
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
                            {this.state.author}
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
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



            </div>
        );
    }

}



export default BookInfo;