
import { BsPlayBtnFill, BsCalendarDate, BsCardImage, BsThreeDots } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
import { useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { addNews, addPicturePost } from "../Redux/Actions/action_profile";


function PostBox() {
  const inputRef = useRef(null);
  const handleClick = () => {

    inputRef.current.click();
  };

  const AUTH = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlOTQyYWZjYTEyOTAwMTQ0MGMwNzYiLCJpYXQiOjE2ODE4MjI3NjIsImV4cCI6MTY4MzAzMjM2Mn0.pIeTfVyp_8tEl-V0vFdySsEr69CGrMBcIWklbktK35Q'
  const dispatch = useDispatch()
  const postId = useSelector((state) => state.user.idpost)
  const login = useSelector((state) => state.user.login)
  const [textValue, setTextValue] = useState('')
  const [photoValue, setPhotoValue] = useState()
  let state = {
    text: textValue,
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(login)
  return (
    <>
      <div rounded className="container rounded bg-dark text-white">
        <div className="row align-items-center mb-3">
          <div className="col-1 mt-3">
            <img src={login.image} style={{ width: "50px", height: "50px" }} className="profile-image rounded-circle me-3" alt="Profile" />
          </div>
          <div className="col ms-4 mt-3">

            <textarea className="form-control form-control-rounded bg-dark text-white" style={{ borderRadius: "50px", height: "25px" }} value={'Avvia un post'} readOnly onClick={handleShow}></textarea>

            <Modal show={show} onHide={handleClose} >
              <Modal.Header closeVariant='white' closeButton className='modalHeader'>
                <div className='profile text-white d-flex align-items-center'>
                  <div>
                    <div><img src={login.image} style={{ width: "50px", height: "50px" }} className='rounded-circle' alt="" /></div>
                  </div>
                  <div className='mx-3 detailProfile'>
                    <div className='fs-4'><b>{login.name} {login.surname}</b> </div>
                    <div>Pubblica</div>
                  </div>
                </div>
              </Modal.Header>
              <Modal.Body className='modalBody'>
                <div>
                  <textarea className='textArea w-100' value={textValue} onChange={(e) => { setTextValue(e.target.value) }} placeholder='Di cosa vorresti parlare?' cols="48" rows='8'></textarea>
                </div>
                <div className='d-flex w-100'>
                  <div onClick={() => {
                    handleClick()
                  }
                  }
                    className=' d-flex rounded-3 mx-3 flex-column align-items-center  bg-primary contModalIcon'>
                    <input

                      style={{ display: 'none' }}
                      ref={inputRef}
                      type="file"
                      onChange={(e) => {

                        setPhotoValue(e.target.files[0])
                      }}
                    />
                    <div className='modalIcon text-primary'><BsCardImage /></div>
                    <div>Foto</div>
                  </div>
                  <div className=' d-flex rounded-3 mx-3 flex-column align-items-center  bg-success contModalIcon'>
                    <div className='modalIcon text-success'><BsPlayBtnFill /></div>
                    <div>Video</div>
                  </div>
                  <div className=' d-flex rounded-3 mx-3 flex-column align-items-center  bg-danger contModalIcon'>
                    <div className='modalIcon text-danger'><BsCalendarDate /></div>
                    <div>Evento</div>
                  </div>
                  <div className=' d-flex rounded-3 mx-3 flex-column align-items-center  bg-warning contModalIcon'>
                    <div className='modalIcon text-warning'><BsThreeDots /></div>
                    <div>Altro</div>
                  </div>

                </div>
              </Modal.Body>
              <Modal.Footer className='modalFooter'>
                <button type="submit" className="rounded-3" onClick={() => {
                  dispatch(addNews(AUTH, JSON.stringify(state), photoValue))
                  setTextValue('')
                  setPhotoValue(undefined)
                  handleClose()
                }} >Posta</button>
              </Modal.Footer>
          
          </Modal>


        </div>
      </div>
      <div className="post-box-icons d-flex justify-content-between pb-3">
        <div className="">
          <div className="post-box-icon d-flex align-items-center p-1">
            <BsCardImage className="text-primary me-1" />
            <span>Photo</span>
          </div>
        </div>
        <div className="">
          <div className="post-box-icon d-flex align-items-center p-1">
            < BsPlayBtnFill className="text-success me-1" />
            <span>Video</span>
          </div>
        </div>
        <div className="">
          <div className="post-box-icon d-flex align-items-center p-1">
            <BsCalendarDate className="text-danger me-1" />
            <span>Eventi</span>
          </div>
        </div>
        <div className="">
          <div className="post-box-icon d-flex align-items-center p-1">
            <MdArticle className="text-warning me-1" />
            <span>Scrivi articolo</span>
          </div>
        </div>
      </div>
    </div >
      <div className="d-flex align-items-center justify-content-around">
        <hr class="border-secondary w-75 px-5" /><span className="ordinaPer">Ordina per: <span className="text-white">Principali ▼</span></span>
      </div>
    </>
  );
}

export default PostBox;





