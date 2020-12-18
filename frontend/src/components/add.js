import axios from 'axios';
import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

export default class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            description: '',
            price: 0,
            img: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {   
        const name = e.target.name; 
        const value = e.target.value;
        this.setState({
          [name]: value
        });   
        
      }

    
    handleSubmit(e) {
        e.preventDefault();

        /* Development: http://localhost:5000/product/add */
        console.log('Something posted');
        console.log(this.state)

        axios.post('http://localhost:5000/product/add' + this.state.id, this.state)
            .then(res => {
                console.log(res);
            }).catch((error) => {
                console.log(error);
            })
    
    }
    
 

    
    render() {
    
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                    Name
                    <Input name='title' type='text' value={this.state.title} onChange={this.handleChange} required />
                </Form.Item>
                <Form.Item>
                    Description
                    <Input name='description' type='text' value={this.state.description} onChange={this.handleChange} required />
                </Form.Item>
                <Form.Item>
                    Price
                    <Input name='price' type='text' value={this.state.price} onChange={this.handleChange} required />
                </Form.Item>
                <Form.Item>
                    Upload Image
                    <Input name='img' type='file' accept='image/*' value={this.state.img} onChange={this.handleChange}/>
                </Form.Item>
        
                <Button type="primary" type='submit' value='Submit' />
            </Form>
        );
    }
}
