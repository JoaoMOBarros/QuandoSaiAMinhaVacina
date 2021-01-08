import React from 'react';
import bannerImg from '../../assets/images/doctor.png'
import PrimaryButton from '../../components/Default/PrimaryButton'
import './styles.css'


const LandingPage = (props) => {
    return (
        <div className="LandingPage">
            <img className="banner_img" src={bannerImg} alt=""/>
            <div className="info_container">
                <h1>Quando vou receber a vacina?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum libero vitae velit molestie volutpat. Nulla molestie faucibus massa molestie maximus. Cras sodales pretium pellentesque. Mauris non auctor nibh. In viverra aliquam est quis tristique. Sed hendrerit justo viverra luctus posuere. Etiam vitae elementum velit. Vestibulum blandit mattis nulla, id rhoncus erat tempor ut. Aenean bibendum massa sed venenatis sollicitudin. Proin ut gravida augue. Quisque tristique urna a sodales scelerisque. Nullam erat lectus, finibus mollis laoreet vitae, feugiat sit amet tellus.</p>
                <PrimaryButton text={"Descubra Agora!"}/>
            </div>
        </div>
    );
}


export default LandingPage 