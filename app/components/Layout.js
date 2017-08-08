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
        name: this.refs.name.value,
        email: this.refs.email.value,
      }),
    });
    this.refs.name.value = null;
    this.refs.email.value = null;
  }

  newContact = () =>
    <div className='pure-g'>
      <div className='pure-u-12-24'>
        <form className='pure-form' onSubmit={this.addContact}>
          <fieldset>
            <legend> New Contact </legend>
            <input ref="email" type='email' placeholder='example@example.com' />
            <input ref="name" type='text' placeholder='Name' />
            <button
              type="submit"
              className='pure-button pure-button-primary'>
              Add
            </button>
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
