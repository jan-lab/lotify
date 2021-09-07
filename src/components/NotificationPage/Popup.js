import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import "./styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export default function Popup(props) {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io("/");

    socket.on('connect', event => {
      console.log("socket.io is connected");
    });

    socket.on('public', msg => {
      setMessages(prev => [msg, ...prev]);
    });

    /* 
      Ensures we disconnect to avoid memory leaks 
      This is commented out because it produces a warning on DevTools. If taking the app for production, we have to disconnect it.
      // return () => socket.disconnect();
    */
    
  }, []);

  const list = messages.map((message, i) => {
    return <li key={i} className="popup">
          <div className="popup-container" onClick={props.onClick}>
            <div className="popup-header">
              <div className="header-left">
                <div className="header-logo">
                  <FontAwesomeIcon icon={faClipboardList} />
                </div>
                <h3>LOTIFY</h3>
              </div>
              <div className="header-right">
                <FontAwesomeIcon icon={faEllipsisH} />
              </div>
            </div>
            <div className="popup-body">
              <p><b>You have a Lotify reminder!</b></p>
              <p>{message}</p>
            </div>
          </div>
    </li>;
  });

  return (
      <ul className="popup-list">
          {list}
      </ul>
  );
}