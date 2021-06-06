import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "../Grid";
import Wrapper from "../Wrapper"
import userAPI from "../../utils/userAPI";
import userImg from "../../assets/img/user_placeholder.png";

function UserAccount(props) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    userAPI.getSession().then(res => {
      console.log(res);
      setDetails(res.data)
    })
  }, [])

  const currentPass = useRef();
  const newPass = useRef();


  // useEffect(() => {
  //   textInput.current.value = '';
  // }, [passwordUpd])


  // const handlePasswordUpd = () => {
  //   // e.preventDefault();
  //   setPasswordUpd(true);
  // }

  const handleCurrentPassword = (e) => {
    e.preventDefault();
    currentPass.current.value = '';
    userAPI.updatePassword(newPass.current.value);
  }

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col size="10">
          <div className="card border-dark mt-5 mb-3 w-50 mw-50" >
            <div className="card-header">Account Details</div>
            <div className="card-body text-dark">
              <img className="mb-3" src={userImg} width="100px" height="100px"></img>
              <p className="card-text"><strong>Full Name: {details.name}</strong></p>
              <p className="card-text"><strong>Email Address: {details.email}</strong></p>
              <h6>Update Password:</h6>
                <div className="mt-4 mb-3">
                  <label className="form-label">Current Password</label>
                  <input type="text" className="form-control" ref={currentPass} />
                </div>
                <div className="mt-4 mb-3">
                  <label className="form-label">New Password</label>
                  <input type="password" className="form-control" ref={newPass} />
                </div>
                <button type="submit" onClick={handleCurrentPassword} className="btn btn-primary mt-2">Submit</button>



            </div>
          </div>

          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default UserAccount;