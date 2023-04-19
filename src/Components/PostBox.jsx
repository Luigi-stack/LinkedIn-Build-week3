import { Container } from "react-bootstrap";
import { BsPlayBtnFill, BsCalendarDate, BsCardImage } from "react-icons/bs";
import { MdArticle } from "react-icons/md";

function PostBox() {
  return (
    <>
    
    <Container>

    </Container>
    <div className="container post-box bg-dark text-white">
      <div className="row align-items-center">
        <div className="col-1 mt-3">
          <img src="http://placekitten.com/200/200" style={{ width: "50px", height: "50px" }} className="profile-image rounded-circle me-3" alt="Profile" />
        </div>
        <div className="col-9 mt-3">
          <textarea className="form-control form-control-rounded" style={{ borderRadius: "50px" }} placeholder="Scrivi qualcosa..."></textarea>
        </div>
      </div>
      <div className=" post-box-icons d-flex justify-content-between">
        <div className="">
          <div className="post-box-icon d-flex align-items-center">
            <BsCardImage className="text-primary me-1"/>
            <span>Photo</span>
          </div>
        </div>
        <div className="">
          <div className="post-box-icon d-flex align-items-center">
            < BsPlayBtnFill className="text-success me-1" />
            <span>Video</span>
          </div>
        </div>
        <div className="">
          <div className="post-box-icon d-flex align-items-center">
            <BsCalendarDate className="text-danger me-1" />
            <span>Eventi</span>
          </div>
        </div>
        <div className="">
          <div className="post-box-icon d-flex align-items-center">
            <MdArticle className="text-warning me-1" />
            <span>Scrivi articolo</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default PostBox;





