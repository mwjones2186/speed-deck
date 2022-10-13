import Table from 'react-bootstrap/Table';
import '../css/profile.css';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <>
            <section className='profile'>
                <div className='textBorder'>
                    <h1>MWjones2186</h1>
                    <h2>MWjones2186@gmail.com</h2>
                </div>

                <div className='profileTable'>
                    <h3>current progress:</h3>
                    <Table>

                        <thead>
                            <tr>
                                <th>Level #</th>
                                <th>Progress</th>
                                <th>Highscore Reached?</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Complete</td>
                                <td>yes</td>
                                <td>5342</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Complete</td>
                                <td>Yes</td>
                                <td>14456</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Complete</td>
                                <td>No</td>
                                <td>35060</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Incomplete</td>
                                <td>No</td>
                                <td>N/A</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Incomplete</td>
                                <td>No</td>
                                <td>N/A</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>


                <Link className='levelBtn' to='/levelSelect'>
                    <Button>
                        Play
                    </Button>
                </Link>
            </section>
        </>
    )
}

