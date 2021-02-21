import React from 'react';

function Header(props) {
	return (<header className="App-header"><h4>{props.loggedIn ? `Hello, ${props.name}` : ''}</h4>
  	<h2>HEADER</h2></header>);
}


export default Header;