
import '../css/Leaderboard.css';

export default function Leaderboard () {

    return (
            <><h1></h1><div className="Leaderboard">
                <header>
                    <h1 className='leaderboardH1'>Leaderboard</h1>
                <nav>
                    <a href="">Solo</a>
                    <a href="">Versus</a>
                    <a href="">Battle Royale</a>
                </nav>
                </header>
                <table>
                    <thead>
                        <tr>
                        <th className="Rank">Rank</th>
                        <th className="Name">Name</th>
                        <th className="Country">Country</th>
                        <th className="Score">Time</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr>
                        <td className="Rank">1</td>
                        <td className="Name">Koda</td>
                        <td className="Country">USA</td>
                        <td className="Score">4566</td>
                    </tr>
                    <tr>
                        <td className="Rank">2</td>
                        <td className="Name">Mike</td>
                        <td className="Country">USA</td>
                        <td className="Score">5342</td>
                    </tr>
                    <tr>
                        <td className="Rank">3</td>
                        <td className="Name">Kaeden</td>
                        <td className="Country">Uganda</td>
                        <td className="Score">5469</td>
                    </tr>
                    <tr>
                        <td className="Rank">4</td>
                        <td className="Name">Hunter</td>
                        <td className="Country">Slovakia</td>
                        <td className="Score">6052</td>
                    </tr>
                </tbody>
            </table>
        </div></>
    )
}

