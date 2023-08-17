import React from 'react';
import TextField from '@mui/material/TextField';

const PersonalInfo = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', }}>
        <TextField label="First Name" variant="outlined" />
        <TextField label="Last Name" variant="outlined"  />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <TextField label="Mobile" variant="outlined" style={{ width: '48%' }} />
        <TextField label="Address" variant="outlined" style={{ width: '48%' }} />
      </div>
    </div>
  );
};

export default PersonalInfo;
