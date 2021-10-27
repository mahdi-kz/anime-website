import React, {useState, useEffect} from 'react';
import './Blog.css'
import blogImg from "../images/test/blog.webp";
import blogVideo from "../videos/1.mp4";
import InfiniteScroll from 'react-infinite-scroll-component';


function Blog(props){
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        getData()
    },[])

    const getData = ()=>{
        setData([
            {
                videoUrl:null,
                imageUrl:blogImg,
                title:"Beauty and the Beast stage revival/UK tour",
                description:"Disney Theatricals is currently at work on a production of Beauty and the Beast which will tour the UK and Ireland in May 2021. The tour will launch with a five week run at Curve Leicester. The original creative team (including Alan) from the Broadway production will be joining the revival.",
                guideLink:"https://disney.co.uk/shows/beauty-and-the-beast-musical-sign-up?ex_cmp=soc-twi-o:img:bea-mus:batb-si",
                guideText:"Click here to sign up for updates and tickets"
            },
            {
                videoUrl:blogVideo,
                imageUrl:null,
                title:"Beauty and the Beast stage revival/UK tour",
                description:"Disney Theatricals is currently at work on a production of Beauty and the Beast which will tour the UK and Ireland in May 2021. The tour will launch with a five week run at Curve Leicester. The original creative team (including Alan) from the Broadway production will be joining the revival.",
                guideLink:"https://disney.co.uk/shows/beauty-and-the-beast-musical-sign-up?ex_cmp=soc-twi-o:img:bea-mus:batb-si",
                guideText:"Click here to sign up for updates and tickets"
            },
            {
                videoUrl:null,
                imageUrl:blogImg,
                title:"Beauty and the Beast stage revival/UK tour",
                description:"Disney Theatricals is currently at work on a production of Beauty and the Beast which will tour the UK and Ireland in May 2021. The tour will launch with a five week run at Curve Leicester. The original creative team (including Alan) from the Broadway production will be joining the revival.",
                guideLink:"https://disney.co.uk/shows/beauty-and-the-beast-musical-sign-up?ex_cmp=soc-twi-o:img:bea-mus:batb-si",
                guideText:"Click here to sign up for updates and tickets"
            },
            {
                videoUrl:blogVideo,
                imageUrl:null,
                title:"Beauty and the Beast stage revival/UK tour",
                description:"Disney Theatricals is currently at work on a production of Beauty and the Beast which will tour the UK and Ireland in May 2021. The tour will launch with a five week run at Curve Leicester. The original creative team (including Alan) from the Broadway production will be joining the revival.",
                guideLink:"https://disney.co.uk/shows/beauty-and-the-beast-musical-sign-up?ex_cmp=soc-twi-o:img:bea-mus:batb-si",
                guideText:"Click here to sign up for updates and tickets"
            },
            {
                videoUrl:null,
                imageUrl:blogImg,
                title:"Beauty and the Beast stage revival/UK tour",
                description:"Disney Theatricals is currently at work on a production of Beauty and the Beast which will tour the UK and Ireland in May 2021. The tour will launch with a five week run at Curve Leicester. The original creative team (including Alan) from the Broadway production will be joining the revival.",
                guideLink:"https://disney.co.uk/shows/beauty-and-the-beast-musical-sign-up?ex_cmp=soc-twi-o:img:bea-mus:batb-si",
                guideText:"Click here to sign up for updates and tickets"
            }
        ])
    }

	return(
		<>
            <div className="BlogContainer">
                <div className="BlogSidebar">
                    <div class="BlogSidebar-close" onClick={props.changingBlogVisible}>
                        <i className="fa fa-times BlogSidebar-social-fa" />
                    </div>
                    <span className="BlogSidebar-span">Animate</span>
                    <a class="BlogSidebar-social" href="#">
                        <i className="fa fa-twitter BlogSidebar-social-fa" />
                    </a>
                    <a class="BlogSidebar-social" href="#">
                        <i className="fa fa-facebook BlogSidebar-social-fa" />
                    </a>
                    <a class="BlogSidebar-social" href="#">
                        <i className="fa fa-instagram BlogSidebar-social-fa" />
                    </a>
                </div>
                <div className="BlogSidebar-content">
                    <div className="BlogSidebar-topbar"> 
                        <span>Animate Blog</span>
                    </div>
                    <InfiniteScroll
                        dataLength={data.length}
                        next={getData}
                        style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
                        inverse={true} //
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                        scrollableTarget="scrollableDiv"
                    >
                    
                        {data.map(item=>( 
                            <>
                                <div className="BlogSidebar-entry">
                                    <div className="ImagePlaceholder">
                                        {item.videoUrl ?
                                            <video src={item.videoUrl} style={{width: "200px",height: "200px"}} type="video/mp4"></video>
                                            :
                                            <img src={item.imageUrl} alt="" />
                                        }
                                    </div>
                                    <h2 className="BlogSidebar-title">{item.title}</h2>
                                    <p class="BlogSidebar-description">{item.description}</p>
                                    <a target="_blank" 
                                        className="BlogSidebar-cta"
                                        href={item.guideLink}>
                                    {item.guideText}
                                    </a>
                                </div>
                            </>
                        ))}

                    </InfiniteScroll>
                </div>
            </div>
		</>
	)
}

export default Blog;