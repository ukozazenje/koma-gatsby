import React from 'react'
import './toggleButton.css';

export default function ToggleButton(props) {
  return (
    <div className={"button_container " + (props.active ? 'active' : '')}>
      <span className="top"></span>
      <span className="middle"></span>
      <span className="bottom"></span>
    </div>
  )
}
