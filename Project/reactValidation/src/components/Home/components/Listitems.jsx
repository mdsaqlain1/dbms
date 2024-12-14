import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { useNavigate } from 'react-router-dom';

// Functional component for navigation logic
const NavigationLink = ({ path, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <ListItemButton onClick={handleClick}>
      {children}
    </ListItemButton>
  );
};

export const mainListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Track
    </ListSubheader>
      <NavigationLink path="/home/fuel">
      <ListItemIcon>
        <LocalGasStationIcon/>
      </ListItemIcon>
      <ListItemText primary="Fuel" />
      </NavigationLink>
    <NavigationLink path="/home/water">
      <ListItemIcon>
        <ConnectingAirportsIcon />
      </ListItemIcon>
      <ListItemText primary="Travel" />
    </NavigationLink>
      <NavigationLink path="/home/electricity">
      <ListItemIcon>
        <ElectricBoltIcon/>
      </ListItemIcon>
      <ListItemText primary="Electricity" />
      </NavigationLink>
      <NavigationLink path="/home/chart">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Results" />
    </NavigationLink>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved Results
    </ListSubheader>
    <NavigationLink path="/home/history">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="History" />
    </NavigationLink>
  </React.Fragment>
);
