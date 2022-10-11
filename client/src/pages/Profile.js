import Table from 'react-bootstrap/Table';
import '../css/profile.css';

export default function Profile() {
    return (
        <>
            <section className='profile'>
                <div className='textBorder'>
                    <h1>username</h1>
                    <h2>email</h2>
                </div>

                <div className='table'>
                    <h3>progress:</h3>
                    <Table>

                        <thead>
                            <tr>
                                <th>Level #</th>
                                <th>Progress</th>
                                <th>Highscore Reached?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Complete</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Incomplete</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Incomplete</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Incomplete</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Incomplete</td>
                                <td>No</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </section>
        </>
    )
}

