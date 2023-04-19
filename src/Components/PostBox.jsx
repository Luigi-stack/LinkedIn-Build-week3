import { BsPlayBtnFill, BsCalendarDate, BsCardImage } from "react-icons/bs";
import { MdArticle } from "react-icons/md";

function PostBox() {
  return (
    <div className="post-box container-sm border border-black">
      <div className="row">
        <div className="col-1 mt-3">
          <img src="http://placekitten.com/50/50" className="profile-image rounded-circle" alt="Profile" />
        </div>
        <div className="col-11 mt-3">
          <textarea className="form-control form-control-rounded" style={{ borderRadius: "50px" }} placeholder="Scrivi qualcosa..."></textarea>
        </div>
      </div>
      <div className="row post-box-icons d-flex justify-content-center">
        <div className="col-3">
          <div className="post-box-icon">
            <BsCardImage className="text-primary" />
            &nbsp;&nbsp;&nbsp;
            <span>Photo</span>
          </div>
        </div>
        <div className="col-3">
          <div className="post-box-icon">
            < BsPlayBtnFill className="text-success" />
            &nbsp;&nbsp;&nbsp;
            <span>Video</span>
          </div>
        </div>
        <div className="col-3">
          <div className="post-box-icon">
            <BsCalendarDate className="text-danger" />
            &nbsp;&nbsp;&nbsp;
            <span>Eventi</span>
          </div>
        </div>
        <div className="col-3">
          <div className="post-box-icon">
            <MdArticle className="text-warning" />
            &nbsp;&nbsp;&nbsp;
            <span>Scrivi articolo</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostBox;





