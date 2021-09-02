import React, { useEffect, useState } from 'react';
import "./styles.scss";
import Button from "../Button";
import axios from 'axios';
const classNames = require('classnames');

export default function Show(props) {

  // handles delete button click
  const deleteTask = (id) => {
    console.log('delete button was clicked');
    props.setEdit('deleted')
    return axios
      .delete(`http://localhost:8080/api/tasks/${id}`)
  }

  return (
    
    <div className="show">
      <form >
        <input type='checkbox' id='task-checkbox' checked={props.status} onChange={() => props.toggleCheckbox(props.id)} />
      </form>
      <label>
        {props.description}
      </label>
      <img
        src={props.logo_url}
        alt='props.logo_url comes here'
      />
      <Button edit onClick={() => props.setEdit('edit')} />
      <Button delete onClick={() => deleteTask(props.id)} />
    </div>

  );

}