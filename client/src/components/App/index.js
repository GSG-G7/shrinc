import React from 'react';

import 'antd/dist/antd.css';
import './style.css';

import Profile from '../pages/Profile';
import Data from '../pages/Profile/profileData';

function App() {
  return (
    <div className="App">
      <Profile profileData={Data} />
    </div>
  );
}

export default App;
