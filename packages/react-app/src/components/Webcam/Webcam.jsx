import { TrademarkOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: "user"
};

export const WebcamCapture = ( props ) => {
    const {countdown, setCountdown, countdownStart, setCountdownStart, image, setImage} = props;

    const webcamRef = React.useRef(null);
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
        // setCapturedImg(imageSrc);
        });
    
    useEffect(() => {
        if(countdownStart && countdown > 0) {
            setTimeout(() => {
                setCountdown((prevCountdown) => prevCountdown - 1)
            }, 1000)
        } else if(countdown === 0) capture();

    }, [countdown, countdownStart])
    return (
        <div className="webcam-container">
            <div className="webcam-img">
                {image == '' ? <Webcam
                    audio={false}
                    height={500}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={500}
                    videoConstraints={videoConstraints}
                    style={{borderRadius:"10px"}}
                /> : <img src={image} />}
            </div>
            <div>
                {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        console.log(image)
                        setImage('')
                    }}
                        className="webcam-btn">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        setCountdownStart(TrademarkOutlined)
                        // setTimeout(() => {
                        //     capture();
                        // }, timer);
                    }}
                        className="webcam-btn">Capture</button>
                }
            </div>
        </div>
    );
};
