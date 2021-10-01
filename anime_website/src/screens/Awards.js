import React, {useState, useEffect} from 'react';
import './styles.css'

import image1 from '../images/oscar.jpg';
import image2 from '../images/golden_globe.jpg';
import image3 from '../images/grammy.jpg';
import image4 from '../images/tony.jpg';
import Navbar from '../components/Navbar';
import InfiniteScroll from 'react-infinite-scroll-component';


export default function Awards(){
    const [awards, setAwards] = useState([]);
    const [boxClasses, setBoxClasses] = useState("template GenericTemplate AwardsTemplate")
    const [boxTitleClass, setBoxTitleClass] = useState("hideTitle");
    const [titleClass, setTitleClass] = useState("hideTitle");
    
    useEffect(()=>{
        setBoxClasses("template GenericTemplate AwardsTemplate templateInComplete") 
        setTimeout(() => {
            setBoxTitleClass("show‌‌BoxTitle")
            setTitleClass("awardsTitle")
        }, 1000);
        getAwards();
    }, [])

    const getAwards = ()=>{

        setAwards([
            {
                yaer:2021,
                award:"EMMY Awards (News & Documentary)",
                award_Presented_by:"National Academy of Television Arts &amp; Sciences",
                winner:"Howard",
                winner_categiry:"Outstanding Music Composition",
                status:"Pending",
                status_type:"Television"
            },
            {
                yaer:2011,
                award:"Grammy Awards",
                award_Presented_by:"National Academy of Recording Arts & Sciences",
                winner:"Howard",
                winner_categiry:"Outstanding Music Composition",
                status:"Done",
                status_type:"Home"
            },
            {
                yaer:1991,
                award:"Family Film Awards",
                award_Presented_by:"World Film Institute",
                winner:"Howard",
                winner_categiry:"Outstanding Music Composition",
                status:"Pending",
                status_type:"Television"
            },
            {
                yaer:1921,
                award:"EMMY Awards",
                award_Presented_by:"National Academy of Television Arts &amp; Sciences",
                winner:"Howard",
                winner_categiry:"Outstanding Music Composition",
                status:"Pending",
                status_type:"Television"
            },
            {
                yaer:2020,
                award:"HCA Awards",
                award_Presented_by:"Hollywood Critics Association",
                winner:"Howard",
                winner_categiry:"Outstanding Music Composition",
                status:"Pending",
                status_type:"Television"
            },
            {
                yaer:2016,
                award:"EMMY Awards",
                award_Presented_by:"National Academy of Television Arts &amp; Sciences",
                winner:"Howard",
                winner_categiry:"Outstanding Music Composition",
                status:"Pending",
                status_type:"Television"
            }
        ])
    }

	return(
		<>
            <Navbar />
            <div className={boxClasses}>
                <div className="AwardsTemplate-Gallery">
                    <img alt="Academy Award Statuette" className="ls-is-cached lazyloaded" data-src={image1} src={image1} />
                    <img alt="Golden Globe Award" className="ls-is-cached lazyloaded" data-src={image2} src={image2} />
                    <img alt="Grammy Award" className="ls-is-cached lazyloaded" data-src={image3} src={image3} /> 
                    <img alt="Tony Award" className="ls-is-cached lazyloaded" data-src={image4} src={image4} />
                    <div className={boxTitleClass}>
                        <div className="grid-item">award 1</div>
                        <div className="grid-item">award 2</div>
                        <div className="grid-item">award 3</div>
                        <div className="grid-item">award 4</div>
                    </div>
                </div>
                <center className={titleClass}>
                    <h2 >Awards</h2>
                </center>
                <section id="AwardsListModule" className="AwardsListModule module" data-module="AwardsListModule">
                    <table>
                        <thead>
                            <tr>
                                <th className="active">Year</th>
                                <th>Award</th>
                                <th>Winner</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>                      
                            {awards.map(item=>( 
                                <>
                                    <tr data-year={item.yaer}
                                        data-award={item.award}
                                        data-project={item.winner}
                                        data-status={item.status} 
                                        className="transitioned-in">
                                        <td>
                                            <div> <span>{item.yaer}</span> </div>
                                        </td>
                                        <td>
                                            <div>
                                                <span>{item.award}</span>
                                                <span>Presented by</span>
                                                <span>{item.award_Presented_by}</span>					
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <span>{item.winner}</span>
                                                <span>Category</span>
                                                <span>{item.winner_categiry}</span>					
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <span>{item.status}</span>
                                                <span>Type</span>
                                                <span>{item.status_type}</span>					
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            ))}
                            
                        </tbody>
                    </table>
                </section>
            </div>
		</>
	)
}
