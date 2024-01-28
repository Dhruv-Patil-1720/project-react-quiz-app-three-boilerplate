import React from 'react';
import { Link } from "react-router-dom";

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div className='container'>
        <h2 className='quiz heading'>Quiz App</h2>
        <Link to={"/quiz"}>
          <button className='play-btn'>Play</button>
        </Link>
      </div>
    );
  }
}
