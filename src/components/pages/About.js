import React from 'react';

const aboutStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto',
  gridColumnGap: '20px',
  gridRowGap: '20px',
  gridColumn: '2/3',
  margin: '0 13px',
  color: '#555'
}

function About() {
  return (
    <div style={aboutStyle}>
      <h3>
        About
      </h3>
      <p style={{ gridColumn: '1/ span 12' }}>
        This application is created by Darshan Shah.
      </p>
    </div>
  );
}

export default About;