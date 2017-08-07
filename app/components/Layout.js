import React from 'react';

const data = [
  { name: 'Adisak Chaiyakul', email: 'adisakchaiyakul@gmail.com' },
  { name: 'Chachis Mathew', email: 'Mathew@gmail.com' },
  { name: 'Jaramie Lucus', email: 'Jaramie@gmail.com' }
];

const Contact = props =>
  <div className='pure-u-1-3'>
    <h2>{props.name}</h2>
    <p>{props.email}</p>
  </div>;

class Layout extends React.Component {
  render() {
    return (
      <div className='pure-g' >
        {data.map(info =>
          <Contact {...info} />
        )}
      </div>
    );
  }
}

export default Layout;
