import React from "react"


class Detail extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    const {logged_in, sign_in_route, sign_out_route, match: {params} } = this.props;
      var theId = this.props.match.params.id
      console.log(this.props)
      console.log(this.props.apartments)
      return (
        <React.Fragment>
            <ul>
            <li>address: {this.props.apartments[theId].address }</li>
              <li>city: { this.props.apartments[theId].city }</li>
              <li>zip code: { this.props.apartments[theId].zip_code }</li>
              <li>country: { this.props.apartments[theId].country }</li>
              <li>name: { this.props.apartments[theId].name}</li>
              <li>phone number: { this.props.apartments[theId].phone_number}</li>
              <li>hours: { this.props.apartments[theId].hours }</li>
              <li>image_path: { this.props.apartments[theId].image_path }</li>
            </ul>

            <a href={'/apartments'}>Back to Listing</a>

        
        </React.Fragment>
    );
  }
}

export default Detail

