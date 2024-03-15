/* eslint-disable no-unused-vars */
import React ,{useEffect} from 'react'
import gridImage from '../../assest/images-grid.jpg'

//import aos==========>
import  Aos from 'aos'
import 'aos/dist/aos.css'

const Support = ()=>{
    //useEffect to set animation duration ==>
    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])

    return(
        <div className="support container section ">
            <div className="sectionContainer">

                <div className="titlesDiv">
                     <small>travel support</small>
                     <h2>Plane your travel with confidence</h2>
                     <p>Find help with booking and travel plans , see what to expect along the journy !</p>
                </div>

                <div className="infoDiv grid">

                      <div className="textDiv grid">
                            <div data-aos='fade-down' data-aos-duration='2500'  className="singleInfo">
                                 <span className="number">01</span>   
                                 <h4>Travel requirements for Dubai</h4>
                                 <p>Find help with booking and travel plans , see what to expect along the journy to your favorit destination !</p>
                            </div>

                            <div data-aos='fade-down' data-aos-duration='3500'   className="singleInfo">
                                 <span className="number colorOne ">02</span>   
                                 <h4>chaufeur servicesat your travel</h4>
                                 <p>Find help with booking and travel plans , see what to expect along the journy to your favorit destination !</p>
                            </div>

                            <div data-aos='fade-down' data-aos-duration='4500'   className="singleInfo">
                                 <span className="number colorTwo">03</span>   
                                 <h4>Multi-risk travel insurnce</h4>
                                 <p>Find help with booking and travel plans , see what to expect along the journy to your favorit destination !</p>
                            </div>
                      </div>

                      <div data-aos='fade-up' data-aos-duration='2500'  className="imgDiv">
                         <img src={gridImage} alt=""/>
                      </div>  
                </div>

            </div>
        </div>
    )
}

export default  Support