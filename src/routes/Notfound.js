import { Alert } from "react-bootstrap";

const Notfound = () => {
  return (
    <Alert variant="danger" className="mt-3">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        404 Not Found!
      </p>
    </Alert>
  );
};

export default Notfound;
