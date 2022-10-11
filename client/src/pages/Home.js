import bgVid from '../images/bigbrain.mp4';
import '../css/homepage.css';

export default function Home() {
    return (
        <>
            <div className='main'>
                <video autoPlay='autoplay' loop='loop' muted id="myVideo">
                    <source src={bgVid} type="video/mp4" />
                </video>
            </div>

            <div className="hero">
                <h1 className="hero-header"><span className='dont'>Don't</span> Be A Statistic (Unless You're <span className='numberOne'>#1</span>) </h1>


                <div class="container">
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <span class="text">Scroll down</span>
                </div>


                <h3 className="hero-message">
                    <span className='line1'>Have you ever wanted to feel true power?</span>
                    <span className='line2'>Have you ever wanted to see your adversaries cry tears of sorrow after you beat them into the ground?</span>
                    If these sentences sound like you, you should get some help. Speed Deck is an innovative and fully functional
                    battlground for math. If you have a feel for numbers and an urge to assert your nerd dominance over your peers
                    then this is the place for you. Climb the ladder, earn bragging rights and outlast the competition in the brand
                    new battle royale mode.
                </h3>
                <h2 className="Ghandi">"Math is power, especially when I use Speed Deck" - Ghandi</h2>

            </div>
        </>
    )
}