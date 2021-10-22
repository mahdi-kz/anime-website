import React, {useState, useEffect} from 'react';
import './About_Us.css'
import Navbar from '../components/Navbar';
import InfoBox from '../components/InfoBox';
import image from '../images/blog.webp';


export default function About_Us(){
    const [info, setInfo] = useState([]);

    useEffect(()=>{
        getInfo();
    },[])

    const getInfo = ()=>{
        const newInfo =[
            {
                text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                image:image
            },
            {
                text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                image:image
            },
            {
                text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                image:image
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