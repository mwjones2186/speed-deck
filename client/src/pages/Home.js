import bgVid from '../images/bigbrain.mp4';
import '../css/homepage.css';

export default function Home () {
    return (
        <div className="Hero">
             <div className='main'>
            <video autoPlay='autoplay' loop='loop' muted id="myVideo">
                <source src={bgVid} type="video/mp4" />
            </video>
        </div>
            <h1 className="hero-header">Don't Be A Statistic (Unless You're #1) </h1>
            <h3 className="hero-message">Have you ever wanted to feel true power? 
            Have you ever wanted to see your adversaries cry tears of sorrow after you beat them into the ground? 
            If these sentences sound like you, you should get some help. Speed Deck is an innovative and fully functional
            battlground for math. If you have a feel for numbers and an urge to assert your nerd dominance over your peers
            then this is the place for you. Climb the ladder, earn bragging rights and outlast the competition in the brand 
            new battle royale mode. 
            </h3>
            <h2 className="Ghandi">"Math is power, especially when I use Speed Deck" - Ghandi</h2>
            
        </div>
    )
}