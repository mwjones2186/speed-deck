
import Alert from 'react-bootstrap/Alert';
import Button from'react-bootstrap/Button';
export default function Progress  ()  {
const points= 19;

  return (
    <>
    <Alert variant="success">
      <Alert.Heading>Level 1</Alert.Heading>
      <p>
       Level 1 consists of single digit number +/- a single digit number. 5 cards that will be totally random. Lets see how fast you can math! 
      </p>
      <hr />
      <Button href="/gameplay">Play Level 1</Button>
    </Alert>
    <Alert variant="warning">
      <Alert.Heading>Level 2</Alert.Heading>
      <p>
       Level 2 consists of double digit number +/- a single digit number. 5 cards that will be totally random. Lets see how fast you can math! 
      </p>
      <hr />
      {points <= 20 ? (<Button>Play Level 2</Button>) : (<button disabled >Beat level 1 to Unlock</button>)}
    </Alert>
    <Alert variant="danger">
      <Alert.Heading>Level 3</Alert.Heading>
      <p>
       Level 3 consists of double digit number +/- a double digit number. 5 cards that will be totally random. Lets see how fast you can math! 
      </p>
      <hr />
      {points <= 20 ? (<button>Play Level 3</button>) : (<button disabled >Beat level 2 to Unlock</button>)}
    </Alert>
    <Alert variant="danger">
      <Alert.Heading>Level 4</Alert.Heading>
      <p>
       Level 4 consists of single digit number MULTIPLIED by a single digit number. 5 cards that will be totally random. Lets see how fast you can math! 
      </p>
      <hr />
      {points <= 20 ? (<button>Play Level 4</button>) : (<button disabled >Beat level 3 to Unlock</button>)}
    </Alert>
    <Alert variant="danger">
      <Alert.Heading>Level 5</Alert.Heading>
      <p>
       Level 5 consists of double digit number MULTIPLIED by a single digit number. 5 cards that will be totally random. Lets see how fast you can math! 
      </p>
      <hr />
      {points <= 20 ? (<button>Play Level 5</button>) : (<button disabled >Beat level 4 to Unlock</button>)}
    </Alert>
    </>
  );
}

