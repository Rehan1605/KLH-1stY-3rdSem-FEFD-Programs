//import React from 'react';
import Button from './components/Button';

const App = () => {

  const handleSubmit = () => {
    alert("Form Submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label>Name:</label>
        <input type="text" />
      </div>

      <br />

      <div>
        <label>Email:</label>
        <input type="email" />
      </div>

      <br />

      <Button type="button">
        Normal Button
      </Button>

      <Button type="submit">
        Submit Form
      </Button>

      <Button type="reset">
        Clear Fields
      </Button>

    </form>
  );
};
export default App;