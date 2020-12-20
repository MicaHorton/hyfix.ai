import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Single extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        console.log(this.props.location.state);

     }

    componentDidMount() {
        /*
        axios.get('https://zsvumedjri.execute-api.us-east-2.amazonaws.com/latest/products/') 
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch((error) => {
                console.log(error);
             })*/
    }
    
    render() {
        return (
            <main>
                <h1>Single</h1>
                
            </main>
     
        );
    }
}

