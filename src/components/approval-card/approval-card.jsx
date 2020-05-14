import React from 'react'
import './approval-card.style.css';

const ApprovalCard = props => {
  return ( 
  <div className="ui card">
      <div className="content">    
       {props.children}
        <div className="ui basic green button">
          Approve
        </div>
        <div className="ui basic red button">
          Decline
        </div>
      </div>
  </div>
  )
}

export default ApprovalCard