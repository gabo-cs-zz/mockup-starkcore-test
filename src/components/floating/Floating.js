import React from 'react';

const btnStyle = {
	position: 'fixed',
	width:'70px',
	height:'70px',
	bottom:'40px',
	right:'40px',
	backgroundColor:'#ee8d38',
	color:'#fff',
	borderRadius:'50px',
	textAlign:'center',
	boxShadow: '2px 2px 3px #999'
}

const iconFloatStyle = {
	marginTop: '20px'
}

const Floating = () => (
  <div>
    <a href="#" style={btnStyle}>
      <i className="fa fa-plus icon-float fa-2x" style={iconFloatStyle}></i>
    </a>
  </div>
);

export default Floating;