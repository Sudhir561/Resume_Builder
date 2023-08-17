import React from 'react';
import Button from '@mui/material/Button';

const BottomBar = ({ selectedTab, setSelectedTab }) => {
  const handleBack = () => {
    setSelectedTab(Math.max(selectedTab - 1, 0));
  };

  const handleNext = () => {
    setSelectedTab(Math.min(selectedTab + 1, 3)); // Assuming you have 4 tabs in total
  };

  return (
   <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      <Button variant="outlined" style={{ marginRight: '8px' }} onClick={handleBack}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
};

export default BottomBar;
