import React, { useRef } from 'react';

function ProductRegistration() {
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const quantityRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Accessing the values directly from refs
    const productName = nameRef.current.value;
    const productDescription = descriptionRef.current.value;
    const productQuantity = quantityRef.current.value;

    alert(`Product Registered:\nName: ${productName}\nDescription: ${productDescription}\nQuantity: ${productQuantity}`);
    
    // Optionally reset the form
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Product Name:
          <input type="text" ref={nameRef} />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea ref={descriptionRef} />
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <input type="number" ref={quantityRef} />
        </label>
      </div>
      <button type="submit">Register Product</button>
    </form>
  );
}

export default ProductRegistration;

/*

reakdown of the Example:
Refs: We use useRef to create references for each input field (nameRef, descriptionRef, quantityRef). This allows us to access the input values directly without needing to store them in state.

Form Submission: When the form is submitted, the handleSubmit function is called. We prevent the default form submission behavior and then retrieve the values from the refs.

Alert: The product details are displayed in an alert box, showing how the form data can be used.

Resetting the Form: The form can be reset using event.target.reset() after submission.

Advantages of Uncontrolled Components:
Simplicity: Less code for simple forms, as you don’t need to manage state for each input.
Integration: Easier to integrate with non-React libraries that manipulate the DOM directly.
When to Use:
Uncontrolled components are often suitable for scenarios where:

You have simple forms with minimal validation.
You’re integrating with libraries or scripts that expect
 direct DOM manipulation.
You want to reduce the overhead of managing form state in more complex
 applications.


*/
