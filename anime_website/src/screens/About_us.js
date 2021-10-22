import React, {useState, useEffect} from 'react';
import './About_Us.css'
import Navbar from '../components/Navbar';
import InfoBox from '../components/InfoBox';

export default function Contact_Us(){
    const [info, setInfo] = useState(false);

    useEffect(()=>{
        getInfo();
    },[])

    getInfo = ()=>{
        const newInfo =[
            {
                text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                Image:image1
            },
            {
                text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                Image:image2
            },
            {
                text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                Image:image3
            }
        ] 
        setInfo(newInfo)
    }

    return(
        <>
            <Navbar showLogo={false}/>
            <div className="about-us-containet">
                {info.map((item, index)=>(<InfoBox info={item}/>))}
            </div>
        </>
    )
}