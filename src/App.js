import React from 'react';
import './App.css';

import ComponentDetail from './components/comment-detail';
import faker from 'faker';
import ApprovalCard from './components/approval-card/approval-card';

function App() {
  return (
    
    <div className="ui container comments">
    <ApprovalCard>
      <p>This does not have any component. It is only for experimental purpose</p>
    </ApprovalCard>
    <ApprovalCard >
      <ComponentDetail 
        name="Matt" 
        date="Today at 5:42PM" 
        text="How artistic!"
        src={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <ComponentDetail 
        name="Joy" 
        date="Today at 5:00PM" 
        text="Really Nice!"
        src={faker.image.avatar()}
      />
    </ApprovalCard>
     <ApprovalCard>
      <ComponentDetail 
        name="Paramita" 
        date="Today at 4:00PM" 
        text="Amazing!"
        src={faker.image.avatar()}
        />   
    </ApprovalCard>   
    </div>
  );
}

export default App;
