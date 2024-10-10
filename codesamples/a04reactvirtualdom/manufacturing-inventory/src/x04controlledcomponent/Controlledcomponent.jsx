import React, { useState } from 'react';

function ControlledInput() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('A name was submitted: ' + inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledInput;

/*


State Initialization: useState is used to create a state variable inputValue to hold the input's value.

Event Handler: handleChange updates the state whenever the input changes, keeping the displayed value in sync with the state.

Form Submission: handleSubmit is triggered on form submission, where you can handle the data as needed.

Advantages of Controlled Components:
Validation: You can easily validate input as it's updated.
Dynamic Input: The input can be dynamically modified based on other state changes.
Debugging: Easier to debug since the input's value is tied directly to the component's state.
Disadvantages:
Performance: May have performance implications for very large forms due to frequent re-renders.
Boilerplate: Requires more code than uncontrolled components since you need to manage the state explicitly.

*/
