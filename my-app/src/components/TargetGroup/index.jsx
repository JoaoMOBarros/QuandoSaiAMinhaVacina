import React from 'react';
import {RiLungsFill} from 'react-icons/ri'
import './styles.css'


const TargetGroup= (props) => {
    return (
        <div className="TargetGroup">
            <div className="label">
                <RiLungsFill className="icon"/>
                <h3>{props.title}</h3>
            </div>
        </div>
    );
}


export default TargetGroup