import React, {useState, useEffect} from 'react';
import './InfoBox.css'
import InfiniteScroll from 'react-infinite-scroll-component';


function InfoBox(props){
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        getData()
    },[])

    const getData = ()=>{
    }

	return(
		<>
            <div className="info-box-Container">
                
            </div>
		</>
	)
}

export default InfoBox;