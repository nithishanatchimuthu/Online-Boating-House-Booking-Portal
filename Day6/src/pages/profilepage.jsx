import React from 'react';
import "./profiepage.css";
export default function ProfilePage(){
    return(
// import { Link } from 'react-router-dom';
<>
  <div className="page-header" />
  <div className="profile-container">
    <div className="row">
      <div className="col-md-4">
        <img
          src="https://image.ibb.co/jxGOma/image.jpg"
          className="img-responsive"
          width={100}
          height={100}
        />
      </div>
      <div className="col-md-8 profile-info">
        <h4 className="user-name">JOHN</h4>
        <h5 className="user-mail">
          <i>email@dmain.com</i>
        </h5>
        <h5 className="user-company">BOATSTAY</h5>
      </div>
    </div>
    <br />
    <br />
    <div className="row more-info">
      <div className="col-md-6">
        <h5>
          <b>website</b>
        </h5>
        <p>boatstay.com</p>
      </div>
      <div className="col-md-6">
        <h5>
          <b>name</b>
        </h5>
        <p>john</p>
      </div>
    </div>
    <div className="row more-info">
      <div className="col-md-6">
        <h5>
          <b>E-mail</b>
        </h5>
        <p>email@dmain.com :(</p> {/* </3 :( */}
      </div>
      <div className="col-md-6">
        <h5>
          <b>Phone Number</b>
        </h5>
        <p>6382519067</p>
      </div>
    </div>
    <br />
    <div className="row">
      <div className="todo-links">
        <a>
          <i className="fa fa-pencil-square-o" /> Edit Info
        </a>
      </div>
      <div className="todo-links">
        <a>
          <i className="fa fa-frown-o" /> Logout
        </a>
      </div>
    </div>
    <br />
    <br />
    <p className="text-center">
      Created By <i>BoatStay</i>
    </p>
  </div>
</>
    );
}
