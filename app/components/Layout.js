import React from 'react';
import data from './data';
import Contact from './Contact';
import './Layout.css';

class Layout extends React.Component {
  componentWillMount() {
    this.setState({
      contacts: data,
    });
  }
  addContact = (e) => {
    e.preventDefault();
    const contacts = this.state.contacts;
    const newID = contacts[contacts.length - 1].id + 1;
    this.setState({
      contacts: contacts.concat({
        id: newID,
        name: `New Contact ${newID}`,
        email: `${newID}@example.com`,
      }),
    });
  }

  newContact = () =>
    <div className='pure-g'>
      <div className='pure-u-12-24'>
        <form className='pure-form'>
          <fieldset>
            <legend> New Contact </legend>
            <input type='email' placeholder='example@example.com' />
            <input type='text' placeholder='Name' />
            <button type="submit" className='pure-button pure-button-primary' onClick={this.addContact}>Add</button>
          </fieldset>
        </form>
      </div>
    </div>;
  render() {
    return (
      <div id='Layout'>
        {this.newContact()}
        <div className='pure-g' >
          {this.state.contacts.map(info =>
            <Contact {...info} key={info.id}/>
          )}
        </div>
      </div>
    );
  }
}

export default Layout;
