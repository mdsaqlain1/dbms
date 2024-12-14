import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Sidebar(props) {
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom>
          Formulas
        </Typography>
        <Typography>
        <p>1. Multiply your monthly electric bill by 105</p>
        <p>2.Multiply your monthly gas bill by 105</p>
        <p>3.Multiply your monthly oil bill by 113</p>
        <p>4.Multiply your total yearly mileage on your car by .79</p>
        <p>5.Multiply the number of flights you’ve taken in the past year (4 hours or less) by 1,100 </p>
        <p>6.Multiply the number of flights you’ve taken in the past year (4 hours or more) by 4,400</p>
          Add 1-8 together for your total carbon footprint
        </Typography>
      </Paper>
      {/* <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography> */}
      {/* {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))} */}
      {/* <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography> */}
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          {/* <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack> */}
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;