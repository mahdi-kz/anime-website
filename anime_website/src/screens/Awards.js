import React, {useState, useEffect} from 'react';
import './Awards.css'

import image1 from '../images/oscar.jpg';
import image2 from '../images/golden_globe.jpg';
import image3 from '../images/grammy.jpg';
import image4 from '../images/tony.jpg';
import Navbar from '../components/Navbar';
import AwardTableRows from '../components/AwardTableRows';


export default function Awards(){
    const [awards, setAwards] = useState([]);
    const [boxClasses, setBoxClasses] = useState("template GenericTemplate AwardsTemplate")
    const [boxTitleClass, setBoxTitleClass] = useState("hideTitle");
    const [sortTableAscending, setSortTableAscending] = useState(true);
    const [sortClasses, setSortClasses] = useState("active");

    useEffect(()=>{
        setBoxClasses("template GenericTemplate AwardsTemplate templateInComplete") 
        setTimeout(() => {
            setBoxTitleClass("show‌‌BoxTitle")
        }, 1000);
        getAwards();
    }, [])

    const sortAwards = ()=>{
        const newAawards = sortTableAscending?
            awards.sort((a, b) => (a.yaer > b.yaer) ? 1 : -1):
            awards.sort((a, b) => (a.yaer < b.yaer) ? 1 : -1)
        setSortClasses(sortTableAscending?"active asc":"active")
        setAwards(newAawards);
        setSortTableAscending(!sortTableAscending)
    }

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
            },
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
            },
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
            <Navbar showLogo={false}/>
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
                <div>
                    <h1 className="TextStyle-PageTitle">
                        <div>
                            <svg className="AwardsSvg">
                                <path d="M219.52,39.36c-8.48-3.52-9.36-4.16-9.36-7.6a5.31,5.31,0,0,1,5.6-5,2.51,2.51,0,0,1,1.6.32,8.09,8.09,0,0,1,.8,1.68,4.6,4.6,0,0,0,4.24,2.8,3.56,3.56,0,0,0,3.68-3.36c0-2.72-2.64-4.48-6.72-4.48-8.16,0-14.48,4.64-14.48,10.64,0,4.72,2.88,7.76,10,10.64,5.76,2.32,8.32,4.8,8.32,8,0,3.6-3.12,6.4-7.12,6.4-1.6,0-3.28-.48-3.84-1.2a8.31,8.31,0,0,1-1-3.12c-.64-2.72-2.32-4.48-4.4-4.48a.87.87,0,0,0-.4.08A3.94,3.94,0,0,0,203,54.48c0,4.48,5,7.92,11.44,7.92,8.24,0,14.16-4.64,14.16-11.2C228.64,46.16,225.28,41.84,219.52,39.36Z"></path>
                            </svg>
                            <svg className="AwardsSvg">
                                <path d="M193.84,54.4a40.23,40.23,0,0,1-.32-6.32V4L182.88,7.36V10a5.84,5.84,0,0,1,1.76-.24c2.08,0,2.8,1,2.8,4.08v13A10.08,10.08,0,0,0,180,23.68c-9.12,0-16.24,8.88-16.24,20.32,0,10.64,5.76,18.4,13.68,18.4a11.85,11.85,0,0,0,10.72-6.88,8.17,8.17,0,0,0,.72,3.52,9.87,9.87,0,0,0,1.76,3.44l7.12-2.88V57a9.18,9.18,0,0,1-1.12.16A3.06,3.06,0,0,1,193.84,54.4Zm-6.4-.88a10,10,0,0,1-7,3.12C174,56.64,170,50.24,170,40c0-8.24,3.92-13.76,9.76-13.76a7.77,7.77,0,0,1,7.68,6.32Z"></path>
                            </svg>
                            <svg className="AwardsSvg">
                                <path d="M155.68,23.68c-4.56,0-8.48,5-11,13.84A39.46,39.46,0,0,0,144,29.6a19.29,19.29,0,0,0-2.24-6.16l-7,3.2v2.72a4.6,4.6,0,0,1,.8-.16c2.56,0,3.68,2.88,3.68,9.52V57.84l-4,.56V61h14.4V58.4l-4.32-.56V50.32c0-10.24,3-19.68,6.24-19.68a8,8,0,0,1,1.6.32,7.44,7.44,0,0,0,2.64.56,4,4,0,0,0,3.76-3.92A4,4,0,0,0,155.68,23.68Z"></path>
                            </svg>
                            <svg className="AwardsSvg">
                                <path d="M104.87,31.6a1.51,1.51,0,0,0,0,3,1.51,1.51,0,1,0,0-3Z"></path>
                                <path d="M123.68,62.28a1.51,1.51,0,1,0,0,3,1.51,1.51,0,1,0,0-3Z"></path>
                                <path d="M128.83,44a1.5,1.5,0,0,0-2.1.29c-6.15,8.09-9.26,10.35-10,10.41-.33,0-.49-.22-.49-.64,0-2.06,2.84-6.65,5.13-10.35,1-1.58,1.9-3.08,2.65-4.43a1.5,1.5,0,1,0-2.61-1.47c-.23.41-.49.85-.75,1.29l-.15-.27A4.09,4.09,0,0,0,117,37.14c-5.68,0-13.46,10.22-13.46,16,0,2.58,1.6,4.39,3.87,4.39,1.82,0,3.89-1.43,5.81-3.25a3.47,3.47,0,0,0,3.47,3.39c.89,0,3.59,0,12.42-11.6A1.5,1.5,0,0,0,128.83,44ZM107.42,54.55c-.72,0-.87-.75-.87-1.39,0-4.5,6.84-13,10.46-13,.73,0,.93.29,1,.4a3.44,3.44,0,0,1-.1,2.9.5.5,0,0,0,0,.13l-.77,1.27s-.1.08-.13.14C114.48,48.88,109.51,54.55,107.42,54.55Z"></path>
                                <path d="M115.3,22.4a3.09,3.09,0,1,0,3.09,3.08A3.09,3.09,0,0,0,115.3,22.4Zm0,4.17a1.09,1.09,0,1,1,1.09-1.09A1.09,1.09,0,0,1,115.3,26.57Z"></path>
                            </svg>
                            <svg className="AwardsSvg">
                                <path d="M91.2,23.68a3.94,3.94,0,0,0-3.92,4c0,1.6.56,2.64,2.32,4.4,1,1,1.36,1.6,1.36,2.24a27.36,27.36,0,0,1-1.84,6.16l-5,12.32L74.88,25H72.72l-8.56,27.2L55.28,23.6l-8.56,2.56V28.4a7.91,7.91,0,0,1,1.2-.08c1.6,0,2.56,1,3.36,3.28l.64,2L61,61h3.12l8.56-26L80.8,61h3.28l9.6-24.16a25,25,0,0,0,1.92-8.16C95.6,25.76,93.84,23.68,91.2,23.68Z"></path>
                            </svg>
                            <svg className="AwardsSvg">
                                <path d="M26.08,7.12H17l2.24,5-12,38.24-.8,2.24c-1.12,3-1.6,3.84-3.12,4.88A6.17,6.17,0,0,1,0,58.4V61H15.44V58.4a14.39,14.39,0,0,1-2.56-.24,3.56,3.56,0,0,1-3.36-3.52,14.65,14.65,0,0,1,.56-3l.72-2.24,1.68-5.12H30.32l4.4,13.6-5.2.56V61H46.64V58.4l-4.08-.56Zm-12.64,34L21.12,16l8.4,25.12Z"></path>
                            </svg>
                        </div>
                    </h1>
                </div>
                <section id="AwardsListModule" className="AwardsListModule module" data-module="AwardsListModule">
                    <table>
                        <thead>
                            <tr>
                                <th className={sortClasses} onClick={sortAwards}>Year</th>
                                <th>Award</th>
                                <th>Winner</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>                      
                            {awards.map(item=>(<><AwardTableRows item={item} /></> ))}
                        </tbody>
                    </table>
                </section>
            </div>
		</>
	)
}
