import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./styles.scss";
import Button from '../Button';
import Select from 'react-select';

export default function Form(props) {

  const [description, setDescription] = useState(null);
  const [location, setLocation] = useState(null);
  const [locations, setLocations] = useState([]);

  /* Styles the React Select Component */
  const customStyles = {
    control: (_, { selectProps: { border }}) => ({
      border: border
    }),
  }

  /* Makes get request and sets locations to be shown on the dropdown menu */
  useEffect(() => {
    axios.get("http://localhost:8080/api/locations")
    .then(res => { 
      setLocations(res.data);  
    })
  }, [])

  /* Takes the locations from the axios request, and output it in the right format for the dropdown location */
  const getLocations = function(locations) {
    let output = [];
    for (let location of locations) {
      output.push({value: location.id, label: location.name + ', ' + location.address})
    }
    return output;
  }

  /* uses the getLocations function and passes the locations object to be used by the React-Select component */
  const options = getLocations(locations)

  /* Creates the post request to send description and locationId to the db */
  const addTask = () => {
    axios
      .post(`http://localhost:8080/api/tasks`,
        {'description': description,
         'location_id':  location.value})
      .then((res) => {
        props.setLoading(true);
        props.setFormState('hide');
        setDescription(null)
      })
      .catch((err) => console.log(err))
  }

  if (props.formState === 'show') {
    return (
      <div className="form">
        <form>
          <input 
            className="description"
            name="description" 
            type="text" 
            placeholder="Add description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <div className="dropdown">
            <Select
              styles={customStyles}
              onChange={setLocation}
              options={options}
              placeholder="Add location"
              components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
              openMenuOnClick={false}
            />
          </div>
        </form>
        <div className="add-form-button-container">
          <Button save onClick={() => addTask()} />
        </div>
      </div>
    );
  } else {
    /* Returns null to hide the form */
    return null
  }
}