import React from "react"


class Detail extends React.Component {
  render () {
  const { apartments, logged_in, sign_in_route, sign_out_route, match: {params} } = this.props;
    var theId = this.props.match.params.id
    console.log(this.props)
    console.log(apartments)
    return (
      <React.Fragment>
          <ul>
          <li>address: { apartments[theId].address }</li>
             <li>city: { apartments[theId].city }</li>
             <li>zip code: { apartments[theId].zip_code }</li>
             <li>country: { apartments[theId].country }</li>
             <li>name: { apartments[theId].name}</li>
             <li>phone number: { apartments[theId].phone_number}</li>
             <li>hours: { apartments[theId].hours }</li>
             <li>image_path: { apartments[theId].image_path }</li>
          </ul>

          <a href={'/apartments'}>Back to Listing</a>

      
      </React.Fragment>
    );
  }
}

export default Detail

