import React, {useState, useEffect} from 'react';
import './Awards.css'
import Navbar from '../components/Navbar';
import AwardTableRows from '../components/AwardTableRows';
import image1 from '../images/awards/ICON AWARDS-01.svg';
import image2 from '../images/awards/ICON AWARDS-02.svg';
import image3 from '../images/awards/ICON AWARDS-03.svg';
import image4 from '../images/awards/ICON AWARDS-04.svg';
import { Container, Row, Col } from 'react-grid-system';
import backgroundImage from '../images/background/awards-bg.webp';


export default function Awards(){
    const [awards, setAwards] = useState([]);
    const [boxClasses, setBoxClasses] = useState("template GenericTemplate AwardsTemplate")
    const [sortTableAscending, setSortTableAscending] = useState(true);
    const [sortClasses, setSortClasses] = useState("active");
    const [showLogo, setShowLogo] = useState(true);

    useEffect(()=>{
        setBoxClasses("template GenericTemplate AwardsTemplate templateInComplete")
        getAwards();
        window.addEventListener('scroll',()=>{
			setShowLogo(document.documentElement.scrollTop?false:true)
		})
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
		<div 
            style={{
                backgroundImage:`url(${backgroundImage})`, 
                backgroundPosition:'center',
                height:'100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize:"cover",
                backgroundAttachment: 'fixed'
            }}
        >
            <Navbar showLogo={showLogo}/>
            <div className={boxClasses}>
                <div className="awards-box">
                    <div className="header">Awards</div>
                    <div className="slideCol">
						<div className="scroller">
							<div className="inner services-title services-title-top">
								<p>See the full list of award's grei</p>
							</div>
						</div>
					</div>
                    <Container fluid  align="center" style={{width: '70%'}}>
                        <Row className='awards-teams-row' >
                            <Col xs={6} sm={6} md={3} xl={3}>
                                <div className="awards-icon-box">
                                    <img 
                                        src={image1} 
                                        className="awards-icon" 
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                    />
                                    <div className="awards-icon-name">Academy Awards</div>
                                </div>
                            </Col>
                            <Col xs={6} sm={6} md={3} xl={3}>
                                <div className="awards-icon-box">
                                    <img 
                                        src={image2} 
                                        className="awards-icon" 
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                    />
                                    <div className="awards-icon-name">Golden Globes</div>
                                </div>
                            </Col>
                            <Col xs={6} sm={6} md={3} xl={3}>
                                <div className="awards-icon-box">
                                    <img 
                                        src={image3} 
                                        className="awards-icon" 
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                    />
                                    <div className="awards-icon-name">Grammy Awards</div>
                                </div>
                            </Col>
                            <Col xs={6} sm={6} md={3} xl={3}>
                                <div className="awards-icon-box">
                                    <img 
                                        src={image4} 
                                        className="awards-icon" 
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                    />
                                    <div className="awards-icon-name">Tony Awards</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    
                    <section id="AwardsListModule" className="AwardsListModule module" data-module="AwardsListModule">
                        <table>
                            <thead>
                                <tr>
                                    <th className={sortClasses} onClick={sortAwards}>Year</th>
                                    <th>Award</th>
                                    <th>Project</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>                      
                                {awards.map(item=>(<AwardTableRows item={item} /> ))}
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
		</div>
	)
}
