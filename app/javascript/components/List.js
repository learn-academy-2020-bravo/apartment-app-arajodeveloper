import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
  render() {
    const { apartments, logged_in, sign_in_route, sign_out_route} = this.props;
    return (
      <React.Fragment>
      <div>
          <ul>
            {
              this.props.apartments.map((apart, idx) =>
              {
                return (
                <li key={idx}>
                  <Link to={'/details/' + idx}>{apart.address}</Link>
                </li>)
              })
            }
          </ul>
      </div>
      </React.Fragment>
    );
  }
}

export default List