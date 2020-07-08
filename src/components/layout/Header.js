import React from 'react';

const headerStyle = {
  color: '#29648E',
  textAlign: 'center',
  padding: '10px',
  display: 'grid',
  gridColumn: '2/3',
  justifyItems: 'start'
}

const h1Style = {
  fontFamily: 'Open Sans',
  fontWeight: '700',
}

const spanHeaderStyle = {
  fontFamily: 'Open Sans',
  fontWeight: '300',
}

function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>Todo<span style={spanHeaderStyle}>List</span></h1>
    </header>
  )
}

export default Header;