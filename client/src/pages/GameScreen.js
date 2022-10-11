import { Button } from "react-bootstrap"
import '../css/GameScreen.css'

export default function Gameplay() {
    return (
        <div className="gameplayWrap">
            <h1>select a gamemode</h1>

            <div className="buttons">
                <Button className="solo threeBtn" href="/levelOne"><span className='soloSpan'>Solo</span></Button>
                <Button className="oneVone threeBtn">One Vs. One</Button>
                <Button className="battleRoyal threeBtn"> Battle Royale!</Button>
            </div>
        </div>
    )
}