import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'
import blogImg from "../images/blog.webp";

function Blog(props){
	

	return(
		<>
            <div className="BlogContainer">
                <div className="BlogSidebar">
                    <div class="BlogSidebar-close" onClick={props.changingBlogVisible}>
                        <i className="fa fa-times fa-sm" />
                    </div>
                    <span className="BlogSidebar-span">Animate</span>
                    <a class="BlogSidebar-social" href="#">
                        <i className="fa fa-twitter" />
                    </a>
                    <a class="BlogSidebar-social" href="#">
                        <i className="fa fa-facebook" />
                    </a>
                    <a class="BlogSidebar-social" href="#">
                        <i className="fa fa-instagram" />
                    </a>
                </div>
                <div className="BlogSidebar-content">
                    <div className="BlogSidebar-topbar"> 
                        <span>Animate Blog</span>
                    </div>
                    <div className="BlogSidebar-entry">
                        <div className="ImagePlaceholder">
                            <img className="" src={blogImg} alt="" />
                        </div>
                        <h2 className="BlogSidebar-title">Beauty and the Beast stage revival/UK tour</h2>
                        <p class="BlogSidebar-description">Disney Theatricals is currently at work on a production of Beauty and the Beast which will tour the UK and Ireland in May 2021. The tour will launch with a five week run at Curve Leicester. The original creative team (including Alan) from the Broadway production will be joining the revival.</p>
                        <a target="_blank" className="BlogSidebar-cta" href="https://disney.co.uk/shows/beauty-and-the-beast-musical-sign-up?ex_cmp=soc-twi-o:img:bea-mus:batb-si">
                            Click here to sign up for updates and tickets
                        </a>
                    </div>
                </div>
            </div>
		</>
	)
}

export default Blog;