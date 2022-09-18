import React, { useState } from 'react'
import './homeStyles.css'
import { WebcamCapture} from '../Webcam/Webcam'


const Home = (props) => {

    const {capturedImg, setCapturedImg, isContactMounted, image, setImage} = props

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('');


    const submitForm = () => {
        alert("Form submitted");
    }


    return (
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <h1>Scan Your Image</h1>
                    {
                        isContactMounted ?
                        <form className="form">
                            <WebcamCapture image={image} setImage={setImage}/>
                            <button type="submit" id="login-button" onClick={(e) => submitForm(e)}>Convert to NFT</button>
                        </form>:
                        <h1>waiting for user signup..</h1>
                    }
                </div>
            </div>
        </div>
    )
}
export default Home
