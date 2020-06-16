import React from 'react'

const MessageBox = ({children, type}) => {
  return (
    <div className={`message-box ${type}`}>
      {children}
    </div>
  )
}

export default MessageBox;
