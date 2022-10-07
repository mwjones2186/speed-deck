import Alert from 'react-bootstrap/Alert';

export const Progress = () => {
  return (
    <>
    <Alert variant="success">
      <Alert.Heading>Level 1</Alert.Heading>
      <p>
       Level 1 consists of single digit number +/- a single digit number. 5 cards that will be totally random. Lets see how fast you can math! 
      </p>
      <hr />
      <button>Lets play!</button>
    </Alert>
    <Alert variant="warning">
      <Alert.Heading>Level 2</Alert.Heading>
      <p>
       Level 2 consists of double digit number +/- a single digit number. 5 cards that will be totally random. Lets see how fast you can math! 
      </p>
      <hr />
      <button>Beat level 1 to Unlock</button>
    </Alert>
    <Alert variant="danger">
      <Alert.Heading>Level 3</Alert.Heading>
      <p>
       Level 3 consists of double digit number +/- a double digit number. 5 cards that will be totally random. Lets see how fast you can math! 
      </p>
      <hr />
      <button>Beat level 2 to Unlock</button>
    </Alert>
    <Alert variant="danger">
      <Alert.Heading>Level 4</Alert.Heading>
      <p>
       Level 4 consists of single digit number MULTIPLIED by a single digit number. 5 cards that will be totally random. Lets see how fast you can math! 
      </p>
      <hr />
      <button>Beat level 3 to Unlock</button>
    </Alert>
    <Alert variant="danger">
      <Alert.Heading>Level 5</Alert.Heading>
      <p>
       Level 5 consists of double digit number MULTIPLIED by a single digit number. 5 cards that will be totally random. Lets see how fast you can math! 
      </p>
      <hr />
      <button>Beat level 4 to unlock</button>
    </Alert>
    </>
  );
}

