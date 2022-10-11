
import '../css/progress.css';

import Alert from 'react-bootstrap/Alert';
import Button from'react-bootstrap/Button';
import { useState } from 'react';
export default function Progress  ()  {
const points= 25000;
 const [levelState, setLevelState] = useState('');

 const handleClick = () => {
  setLevelState(levelState +1)
 }
 

  return (
    <>
    <Alert variant="success" className='box'>
      <Alert.Heading >Level 1</Alert.Heading>
      <p>
       Level 1 consists of single digit number +/- a single digit number. 5 cards that will be totally random. Lets see how fast you can math! 
      </p>
      <hr />
      <Button className='unlocked' href="/gameplay">Play Level 1</Button>
    </Alert>
    <Alert variant="warning" className='box'>
      <Alert.Heading>Level 2 {2}</Alert.Heading>
      <p>
       Level 2 consists of double digit number +/- a single digit number. 5 cards that will be totally random. Lets see how fast you can math! 
      </p>
      <hr />
      {points <= 25000 ? (<Button onClick={handleClick} className='unlocked'>Play Level 2</Button>) : (<Button className='notunlocked' disabled >Beat level 1 to Unlock</Button>)}
    </Alert>
    <Alert variant="danger" className='box'>
      <Alert.Heading>Level 3</Alert.Heading>
      <p>
       Level 3 consists of double digit number +/- a double digit number. 5 cards that will be totally random. Lets see how fast you can math! 
      </p>
      <hr />
      {points <= 25000 ? (<Button className='unlocked'>Play Level 3</Button>) : (<Button className='notunlocked' disabled >Beat level 2 to Unlock</Button>)}
    </Alert>
    <Alert variant="danger" className='box'>
      <Alert.Heading>Level 4</Alert.Heading>
      <p>
       Level 4 consists of single digit number MULTIPLIED by a single digit number. 5 cards that will be totally random. Lets see how fast you can math! 
      </p>
      <hr />
      {points <= 25000 ? (<Button className='unlocked'>Play Level 4</Button>) : (<Button className='notunlocked' disabled >Beat level 3 to Unlock</Button>)}
    </Alert>
    <Alert variant="danger" className='box'>
      <Alert.Heading>Level 5</Alert.Heading>
      <p>
       Level 5 consists of double digit number MULTIPLIED by a single digit number. 5 cards that will be totally random. Lets see how fast you can math! 
      </p>
      <hr />
      {points <= 25000 ? (<Button className='unlocked'>Play Level 5</Button>) : (<Button className='notunlocked' disabled >Beat level 4 to Unlock</Button>)}
    </Alert>
    </>
  );
}

