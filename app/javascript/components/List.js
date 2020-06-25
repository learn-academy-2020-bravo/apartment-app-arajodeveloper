import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

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
          <Link to="/new">
          <Button
            style={{backgroundColor:"white",border:"1px solid rgb(237,53,53)", color:"rgb(237,53,53)",fontWeight: "500", marginBottom: "80px"}}
            id="submit"
            name="submit"
          >Create New Listing</Button>
        </Link>
      </div>
      </React.Fragment>
    );
  }
}

export default List