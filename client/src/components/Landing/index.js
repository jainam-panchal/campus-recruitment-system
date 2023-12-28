import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import landingPage from '../../images/landing.jpg';

const Landing = () => {
  return (
    <Container className="mt-5">
  <div className="p-5 mb-4 bg-light rounded-3">
    <div className="container-fluid text-center">
      <img src={landingPage} alt='landing' className='img-fluid mb-2' style={{maxWidth: '40%', height: 'auto'}}/>
      <h1 className="display-5 fw-bold">Recruit faster with CRS!</h1>
      <p className="col-md-8 mx-auto fs-4" style={{fontWeight: 200}}>
        Campus Recruitment System (CRS) is a recruiting app that makes the
        hiring process faster and simpler so that your team can hire the
        best people, faster.
      </p>
      <p>
        <Link to={ROUTES.LOG_IN}>
          <Button variant="success">Get Started</Button>
        </Link>
      </p>
    </div>
  </div>
</Container>
  );
};

export default Landing;
