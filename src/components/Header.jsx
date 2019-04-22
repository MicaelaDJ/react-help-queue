import React from "react";

function Header(){
  var headerStyles = {
    backgroundColor: '#d2def2',
  }
  var buttonStyles = {
    backgroundColor: '#607699',
    color: 'white',
    padding: '10px',
    fontFamily: 'courier',
    margin: '10px',
    fontSize: '20px',
    border: 'none',
  }
  var rightStyles = {
    padding: '15px',
    float: 'right'
  }
  var searchStyles = {
    fontSize: '20px',

  }
  var gabStyles = {
    fontSize: '20px'
  }
  return (
    <div style={headerStyles}>
      <button style={buttonStyles}>Home</button>
      <button style={buttonStyles}>Notifications</button>
      <button style={buttonStyles}>Messages</button>
      <div style={rightStyles}>
        <input style={searchStyles} type='text' placeholder='Search'></input>
        <input style={gabStyles} type='text' placeholder='Gab'></input>
      </div>
    </div>

  );
}

export default Header;
