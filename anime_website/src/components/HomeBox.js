import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './HomeBox.css'

import image1 from '../images/1.jpeg';
import image2 from '../images/2.jpeg';
import image3 from '../images/3.jpeg';
import image4 from '../images/4.jpeg';


function HomeBox(){

	const [selected, setSelected] = useState(null);
	const [title, setTitle] = useState('Our Items');
	

	return(
		<>
			<ul>
				<li className="top-li"  
					onMouseEnter={()=>setTitle("image 1")} 
					onMouseLeave={()=>setTitle('Our Items')}
				>
					<img src={image1} alt="" />
				</li>
				<li className="bottom-li" 
					onMouseEnter={()=>setTitle("image 2")} 
					onMouseLeave={()=>setTitle('Our Items')}
				>
					<img src={image2} alt="" />
				</li>
				<li className="top-li" 
					onMouseEnter={()=>setTitle("image 3")} 
					onMouseLeave={()=>setTitle('Our Items')}
				>
					<img src={image3} alt="" />
				</li>
				<li className="bottom-li" 
					onMouseEnter={()=>setTitle("image 4")} 
					onMouseLeave={()=>setTitle('Our Items')}
				>
					<img src={image4} alt="" />
				</li>
			</ul>
			<h2 className="title">{title}</h2>
		</>
	)
}

export default HomeBox;



//<button
//	        onMouseEnter={() => setIsShown(true)}
//	        onMouseLeave={() => setIsShown(false)}>
//	        Hover over me!
//	      </button>
//	      {isShown && (
//	        <div>
//	          I'll appear when you hover over the button.
//	        </div>
//	      )}