import React from 'react';
import './styles.css'


const PrimaryButton= (props) => {
    return (
        <div className="primary_button">
            {props.text}
        </div>
    );
}


export default PrimaryButton