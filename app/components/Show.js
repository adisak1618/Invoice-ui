import React from 'react';
import data from './data';

class Show extends React.Component {
  componentWillMount() {
    this.setState({
      contact: data.filter(c => c.id === parseInt(this.props.params.contactID, 10))[0],
    });
  }
  render() {
    return (
      <div id='show'>
        Id: {this.state.contact.id} <br/>
        Name: {this.state.contact.name} <br/>
        Email: {this.state.contact.email}
      </div>
    );
  }
}

export default Show;
