import React from 'react';

const Square = (props) => {

       const styleDiv = {
           backgroundColor:props.color,
           height:props.size,
           width:props.size
       }
       return <div style={styleDiv}/>
};

export default Square;