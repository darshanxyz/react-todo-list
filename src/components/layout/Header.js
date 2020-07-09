import React from 'react';
import { Link } from 'react-router-dom';
const headerStyle = {
  color: '#29648E',
  gridColumn: '2/3',
  display: 'grid',
  gridTemplateColumns: '10fr 2fr',
  margin: '10px'
}

const h1Style = {
  fontFamily: 'Open Sans',
  fontWeight: '700',
}

const spanHeaderStyle = {
  fontFamily: 'Open Sans',
  fontWeight: '300'
}

const linkStyle = {
  alignSelf: 'center',
  justifySelf: 'end',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: '20px'
}

function Header() {
  return (
    <header style={headerStyle}>
      <Link to="/"><h1 style={h1Style}>Todo<span style={spanHeaderStyle}>List</span></h1></Link>
      <div style={linkStyle}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  )
}

export default Header;