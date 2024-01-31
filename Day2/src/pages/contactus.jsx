import { useState } from "react";


function ContactUs() {
  
 

  

  return (
    <div>
    <div>
      <title>Contact Us</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        type="text/css"
      />
      <div className="box">
        <div className="logo">
          <h1>BoatStay</h1>
        </div>
        <div className="text">
          <h1>
            Contact <span className="red">Us</span>
          </h1>
          <hr className="redline" />
          <p>Have Questions? We have answers (maybe)</p>
        </div>
      </div>
      <div className="touch">
        <h2>Get in touch</h2>
        <hr className="redline" />
      </div>
      
      
      
    
              <form action method="POST" name="contact-form">
                <div className="container form-margin">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />     <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="First Name" ng-model="firstname" name="firstname" required />    
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Company Name" ng-model="company" name="company" required />    
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Phone" ng-model="phone" name="firstname" required />    
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Last Name" ng-model="lastname" name="lastname" required />    
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="E-mail" ng-model="email" name="email" required />    
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Course" ng-model="course" name="course" required />    
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
                    <div className="col-lg-8 col-md-8 col-sm-8">
                      <div className="form-group">
                        <textarea className="form-control" rows={6} placeholder="Message" ng-model="message" name="message" required defaultValue={""} />
                      </div>  
                      <div className="pager">
                        <button type="submit" className="btn btn-success">SEND MESSAGE</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
                </div>
              </form>
              <div className="container address">
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" />
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <h3>Our Address</h3>
                  <div className="redline-address" />
                  <p>SKCET</p>
                  <p>Sugunapuram, </p>
                  <p>Kuniyamuthur,</p>
                  <p>Coimbatore - 641001</p>
                  <div className="phone-e">
                    <p><span className="glyphicon glyphicon-envelope"> </span> nithishanatchimuthu28@gamil.com</p>
                    <p><span className="glyphicon glyphicon-phone" /> 8825901080</p>
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" />
                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.3363886065963!2d76.95572547467445!3d10.937942256194482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85bb22369d571%3A0x72cc0bed93b5b2b6!2sSri%20Krishna%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1706623650522!5m2!1sen!2sin"  width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" />
              </div>
              <div className="bottom-gap" />
              </div>
              </div>
          );
        }
    
export default ContactUs;