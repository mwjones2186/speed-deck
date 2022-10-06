
import '../css/homepage.css';

export const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <video autoplay muted loop id="myVideo">
                <source src="./images/bigbrain.mp4" type="video/mp4"></source>
            </video>
        </div>
    )
}