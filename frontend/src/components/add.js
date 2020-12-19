import axios from 'axios';
import React, { Component } from 'react';

export default class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            price: 0,
            img: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFileChange(e) {
        const name = e.target.name;
        const uploadedFile = e.target.files[0];
        this.setState({
            [name]: uploadedFile
        });

        console.log('State Data', this.state);

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
        console.log('Client sent request');
        console.log(this.state);


        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('description', this.state.description);
        formData.append('price', this.state.price);
        formData.append('img', this.state.img);
        console.log(formData);

        /*
        axios.post('http://localhost:5000/products/add', this.state, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
              },
            }).then(res => {
                console.log(res);
            }).catch((error) => {
                console.log(error);
            });*/
        
       
        axios.post('http://localhost:5000/products/add', this.state)
        .then(res => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        }); 
    }
    
    render() {
        return (
            <main className='form-page'>

            <form className='form' encType='multipart/form-data' onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input name='name' type='text' value={this.state.name} onChange={this.handleChange} required />
                </label>
                <label>
                    Description
                    <input name='description' type='text' value={this.state.description} onChange={this.handleChange} required />
                </label>
                <label>
                    Price
                    <input name='price' type='text' value={this.state.price} onChange={this.handleChange} required />
                </label>
                <label>
                    Upload Image
                    <input name='img' type='file' accept='image/*' onChange={this.handleFileChange}/>
                </label>
        
                <input className='submit-button' type='submit' value='Submit' />
            </form>

            </main>
        );
    }
}

/*
or skip the whole state thing and set form data directly,
jesus christ do I know?
*/