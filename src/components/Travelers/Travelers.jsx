// eslint-disable-next-line no-unused-vars
import  React ,{useEffect}from 'react'

import newYork  from '../../assest/newYork.jpg'
import traveler1 from '../../assest/user(1).jpg'

import paris from '../../assest/paris.jpg'
import traveler2 from '../../assest/user(2).jpg'

import london from '../../assest/london.jpg'
import traveler3 from '../../assest/user(3).jpg'

import dubai from '../../assest/dubai.jpg'
import traveler4 from '../../assest/user(4).jpg'

//import aos==========>
import  Aos from 'aos'
import 'aos/dist/aos.css'

const travelers =[
    {
        id: 1,
        destinationImage: newYork,
        travelerImage: traveler1,
        travelerName:"Wilson Lindsey",
        socialLink:"@wilsonLindsey",
    },
    {
        id: 2,
        destinationImage: paris,
        travelerImage: traveler2,
        travelerName:"IsraTech",
        socialLink:"@isratech8",
    },
    {
        id: 3,
        destinationImage: london,
        travelerImage: traveler3,
        travelerName:"Naresh Lamer",
        socialLink:"@nareshLamer",
    },
    {
        id: 4,
        destinationImage: dubai,
        travelerImage: traveler4,
        travelerName:"Sarah",
        socialLink:"@sarah",
    },
];

const Travelers = ()=>{
     //useEffect to set animation duration ==>
     useEffect(()=>{
        Aos.init({duration:2000})
    }, [])

    return(
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2 data-aos='fade-down' data-aos-duration='2500'>Top travelers of the month</h2>

                <div className="travelersContainer grid">
                    {
                      travelers.map(({id ,destinationImage ,travelerImage ,travelerName ,socialLink})=>{
                        return(
                                // single passenger card 
                                 <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                                        <img src={destinationImage} className="destinationImage"/>

                                        <div className="travelerDetails">
                                                <div className="travelerPicture">
                                                    <img src={travelerImage} className='travelerImage'/>
                                                </div>
                                        </div>

                                        <div className="travelerName">
                                           <span>{travelerName}</span>
                                           <p>{socialLink}</p>
                                        </div>
                                 </div>
                        )
                      }) 
                    }
                   

                </div>
            </div>

        </div>
    )
}

export default Travelers 