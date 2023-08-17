import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; // Import Link

const ResumeTemplate = () => {
  const [showButton1, setShowButton1] = useState(false);
  const [showButton2, setShowButton2] = useState(false);

  const handleMouseEnter1 = () => {
    setShowButton1(true);
  };

  const handleMouseLeave1 = () => {
    setShowButton1(false);
  };

  const handleMouseEnter2 = () => {
    setShowButton2(true);
  };

  const handleMouseLeave2 = () => {
    setShowButton2(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{ position: 'relative', margin: '50px' }}
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      >
        <img src="https://www.mycvstore.com/wp-content/uploads/2019/09/Resume-Page.jpg" alt="Template 1" width="200px" height="400px" />
        {showButton1 && (
          <Link to="/details" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="primary"
              style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              Use Template
            </Button>
          </Link>
        )}
      </div>

      <div
        style={{ position: 'relative' }}
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
      >
        <img src="https://content.wisestep.com/wp-content/uploads/2017/05/single-page-resume-template.png" alt="Template 2" width="200px" height="400px" />
        {showButton2 && (
          <Link to="/details" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="primary"
              style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              Use Template
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ResumeTemplate;
