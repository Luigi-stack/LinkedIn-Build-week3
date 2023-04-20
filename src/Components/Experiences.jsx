import { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addExperienceAction,
  putExperience,
  getExperienceAction,
  deleteExperience,
  addFotoExp
} from "../../../redux/action";
import { HiOutlinePencil } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCameraFill } from "react-icons/bs";

 const Experiences = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const allExperiences = useSelector((state) => state.linkedin.experience);
  const [exp, setExp] = useState(allExperiences);
  const esperienza = {
    role: "",
    company: "",
    startDate: "",
    description: "",
    area: "",
    image: ""
  };

  const [fd, setFd] = useState(new FormData());

  const handleFile = (ev) => {
    setFd((prev) => {
      prev.delete("experience");
      prev.append("experience", ev.target?.files[0]);
      return prev;
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (props.id !== "ADDEXP") {
      dispatch(addFotoExp(fd, props.idProfile, props.idExp));
    }
  };

  useEffect(() => {
    if (props.id === "ADDEXP") {
      setExp(esperienza);
    } else {
      const myExperiences = allExperiences.filter((obj) => obj._id === props.id);
      setExp(myExperiences[0]);
    }
  }, []);

  return (
    <>
      <div className="d-flex justify-content-end ">
        <div className="d-flex justify-content-center rounded-circle pencil-add align-items-center">
          {props.id === "ADDEXP" ? (
            <AiOutlinePlus style={{ fontSize: "23px" }} onClick={(e) => handleShow()} />
          ) : (
            <HiOutlinePencil style={{ fontSize: "23px" }} onClick={(e) => handleShow()} />
          )}
        </div>
      </div>

      <Modal size="lg" show={show} onHide={handleClose} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>titolo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modale">
          <p>Aggiungi alla tua esperienza</p>
          {props.id === "ADDEXP" ? (
            <Form.Group className="mb-3">
              <input
                type="file"
                id="file"
                onChange={(e) => {
                  setExp((exp) => ({ ...exp, image: handleFile(e) }));
                }}
              />
              <label for="file" className="inputFile">
                <BsCameraFill />
                <small>Aggiungi foto</small>
              </label>
            </Form.Group>
          ) : (
            <Form.Group className="mb-3" onSubmit={handleSubmit}>
              <input
                type="file"
                id="file"
                onChange={(e) => {
                  setExp((exp) => ({ ...exp, image: handleFile(e) }));
                }}
              />
              <label for="file" className="inputFile">
                <BsCameraFill />
                <small>Aggiungi foto</small>
              </label>
            </Form.Group>
          )}

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Qualifica*</Form.Label>
            <Form.Control
              value={exp.role}
              type="text"
              autoFocus
              onChange={(e) => {
                setExp((exp) => ({ ...exp, role: e.target.value }));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tipo di impiego*</Form.Label>
            <Form.Control
              value={exp.description}
              type="text"
              autoFocus
              onChange={(e) => {
                setExp((exp) => ({ ...exp, description: e.target.value }));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome azienda*</Form.Label>
            <Form.Control
              value={exp.company}
              type="text"
              autoFocus
              onChange={(e) => {
                setExp((exp) => ({ ...exp, company: e.target.value }));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Località*</Form.Label>
            <Form.Control
              value={exp.area}
              type="text"
              autoFocus
              onChange={(e) => {
                setExp((exp) => ({ ...exp, area: e.target.value }));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tipo di località</Form.Label>
            <Form.Control type="text" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Competenze</Form.Label>
            <Form.Control type="text" autoFocus />
          </Form.Group>
          <div className="d-flex justify-content-around">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Data di inizio</Form.Label>
              <Form.Control
                value={exp.startDate}
                type="date"
                autoFocus
                onChange={(e) => {
                  setExp((exp) => ({ ...exp, startDate: e.target.value }));
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Data fine</Form.Label>
              <Form.Control type="date" autoFocus />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {props.id !== "ADDEXP" ? (
            <Button
              variant="danger"
              onClick={() => {
                dispatch(deleteExperience(props.idProfile, props.idExp));
                window.location.reload();
                dispatch(getExperienceAction(props.idProfile));
                window.location.reload();
              }}
            >
              DELETE
            </Button>
          ) : (
            <></>
          )}

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {props.id === "ADDEXP" ? (
            <Button
              variant="primary"
              onClick={() => {
                dispatch(addExperienceAction(exp, props.idProfile, fd));
                window.location.reload();
                dispatch(getExperienceAction(props.idProfile));
              }}
            >
              Save Changes
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                dispatch(putExperience(exp, props.idProfile, props.idExp));
                dispatch(addFotoExp(fd, props.idProfile, props.idExp));
                dispatch(getExperienceAction(props.idProfile));
              }}
            >
              Save Changes
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Experiences