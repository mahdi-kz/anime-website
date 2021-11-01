import React, {useState, useEffect} from 'react';
import './Social_Media.css'
import Navbar from '../../components/Navbar';
import MembersModal from '../../components/MembersModal';
import GreiVideo from '../../components/GreiVideo.js';
import video1 from '../../videos/big.mp4';
import video2 from '../../videos/main-video.mp4';
import video3 from '../../videos/center-video.webm'
import mainImage from '../../images/test/services-main.jpeg';
import image1 from '../../images/test/people2.jpg';
import image2 from '../../images/test/people1.png';
import servicesBg from '../../images/background/services-bg.webp'
import { Container, Row, Col } from 'react-grid-system';


export default function SocialMedia(props){
	const [videos, setVideos] = useState([]);
	const [products, setProducts] = useState([]);
	const [members, setMembers] = useState([]);
	const [videoUrl, setVideoUrl] = useState(null);
	const [showTeamModal, setTeamShowModal] = useState(false);
	const [personInfo, setPersonInfo] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [slideLeft, setSlideLeft] = useState(0);

}