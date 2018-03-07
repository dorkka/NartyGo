import React from 'react';

export default function FooterLayout(props){
    const style = {
        fontSize: 'large',
        color: 'blue'
    }
    return (
        <div >
            <hr />
            <footer style = {style}>
                <p>&copy; D-Softkol 2018 </p>
            </footer>
        </div>
    )
}
