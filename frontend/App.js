import React from 'react';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Integration Testing Challenge</a>
      </nav>
      {/* <div className="App"> */}
        <ContactForm />
      {/* </div> */}
    </>
  );
};

export default App;
