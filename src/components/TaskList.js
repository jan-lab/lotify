import React from 'react';
import "./TaskList.scss";
import Show from './TaskListItem/Show';
import Checked from './TaskListItem/Checked';

const classNames = require('classnames');

const tasks = [
  {
    id: 1,
    description: "Return Dress",
    status: false,
    location_id: 6,
    device_id: 6,
    latitude: 49.22720599357389,
    longitude: -123.0034522066196,
    name: "Best Buy Station Square",
    address: "Station Square, 6200 McKay Ave Unit 200, Burnaby, BC V5H 4L7",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/1280px-Best_Buy_Logo.svg.png"
  },
  {
    id: 2,
    description: "Buy eye drops",
    status: true,
    location_id: 4,
    device_id: 4,
    latitude: 49.28334159584531,
    longitude: -123.11836841961,
    name: "CF Pacific Center",
    address: "701 W Georgia St, Vancouver, BC V7Y 1G5",
    logo_url: "https://images.wirkn.com/w04HAIbNSlGDVcdfI3U4_pa.jpg"
  },
  {
    id: 3,
    description: "Buy bluelight screen filter",
    status: false,
    location_id: 4,
    device_id: 4,
    latitude: 49.28334159584531,
    longitude: -123.11836841961,
    name: "Dollarama Station Square",
    address: "Station Square, 6200 McKay Ave, Burnaby, BC V5H 4L7",
    logo_url: "https://jobapplications.net/wp-content/uploads/dollarama-logo.png"
  },
  {
    id: 4,
    description: "pickup birthday cake",
    status: true,
    location_id: 4,
    device_id: 4,
    latitude: 49.28334159584531,
    longitude: -123.11836841961,
    name: "Walmart Supercenter",
    address: "610 6th St, New Westminster, BC V3L 3C2",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/2560px-Walmart_logo.svg.png"
  }
];

export default function TaskList(props) {

  return (
    <div className="taskList">
      {/* maps over tasks and returns only unchecked ones */}
      <ul>
        {tasks.map(task => task.status === false && (
          <Show
            status={task.status}
            description={task.description}
            logo_url={task.logo_url}
          />
        ))}
      </ul>

      {/* maps over tasks and returns only checked ones */}
      <ul>
        {tasks.map(task => task.status === true && (
          <Checked
            status={task.status}
            description={task.description}
            logo_url={task.logo_url}
          />
        ))}
      </ul>
    </div>

  );

}