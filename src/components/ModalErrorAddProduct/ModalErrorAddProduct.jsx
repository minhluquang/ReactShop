import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const ModalErrorAddProduct = (props) => {
  const { show, handleClose } = props;
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="fs-4">You've encountered a snag!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span className="fs-5">You need to log in to make a purchase!</span>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleLogin}>
          Log in
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalErrorAddProduct;
