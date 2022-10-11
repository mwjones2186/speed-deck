import '../css/Leaderboard.css';

export default function Leaderboard () {
    return (
            <><h1></h1><div className="Leaderboard">
                <header>
                    <h1>Leaderboard</h1>
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
                        <td className="Name">Placeholder</td>
                        <td className="Country">USA</td>
                        <td className="Score">12.2</td>
                    </tr>
                    <tr>
                        <td className="Rank">2</td>
                        <td className="Name">Placeholder</td>
                        <td className="Country">USA</td>
                        <td className="Score">12.3</td>
                    </tr>
                    <tr>
                        <td className="Rank">3</td>
                        <td className="Name">Placeholder</td>
                        <td className="Country">USA</td>
                        <td className="Score">12.4</td>
                    </tr>
                </tbody>
            </table>
        </div></>
    )
}

