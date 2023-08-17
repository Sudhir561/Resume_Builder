import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
// import Divider from '@mui/material/Divider';
import PersonalInfo from './PersonalInfo'; // Import the PersonalInfo component
import BottomBar from '../BottomBar/BottomBar';
import Education from './Education';
import KeySkill from './KeySkill';
import WorkExperience from './WorkExperience';




const DetailsFilingPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
    <Paper elevation={3} style={{ display: 'flex', flexDirection: 'row', height: '70vh', }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="Vertical tabs"
      >

        <Tab label="Personal Info" />
        {/* <Divider /> */}
        <Tab label="Work Experience" />
        {/* <Divider /> */}
        <Tab label="Education" />
        {/* <Divider /> */}
        <Tab label="Key Skills" />
      </Tabs>

      <div style={{ flexGrow: 1, height: '100%', overflow: 'auto', padding: '16px' }}>
        {selectedTab === 0 && <PersonalInfo />}
        {selectedTab === 1 && <WorkExperience/>}
        {selectedTab === 2 && <Education/>}
        {selectedTab === 3 && <KeySkill/>}
        
      </div>
    </Paper>
    <BottomBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </>
  );
};

export default DetailsFilingPage;







