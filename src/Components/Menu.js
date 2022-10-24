import React from 'react';
/* Add any imports you think you might need here! */
import Color from './Color';

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color color = "red" handleClick={props.func}></Color>
          <Color color = "pink" handleClick={props.func}></Color>
          <Color color = "blue" handleClick={props.func}></Color>
          <Color color = "green" handleClick={props.func}></Color>

      </div>
    );
}

export default Menu;