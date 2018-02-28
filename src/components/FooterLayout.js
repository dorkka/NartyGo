import React, { Component } from 'react';
import '../styles/bootstrap.min.css';

class FooterLayout extends Component {
    render(){
        const style = {
            fontSize: 'large',
            color: 'blue'
        }
        return (
            <div className="container body-content">
                <hr />
                <footer style = {style}>
                    <p>&copy; D-Softkol 2018 </p>
                </footer>
            </div>
        )
    }
}

export default FooterLayout;