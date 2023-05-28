import React from "react";

const Blog = () => {
  return (
    <div>
      <h5 className="text-xl font-bold text-blue-500 mt-5">
        Q1.ell us the differences between uncontrolled and controlled
        components?
      </h5>
      <p className="mt-3">
        Uncontrolled components and controlled components are two approaches
        used in managing form inputs in React.js. Uncontrolled components allow
        form inputs to manage their own state internally, without relying on
        React's state management. They are simpler to implement but provide less
        control and validation. On the other hand, controlled components rely on
        React's state to manage the form input values. They offer more control,
        as the values are controlled by React and can be easily validated and
        manipulated. However, they require more code and handling compared to
        uncontrolled components.
      </p>
      <h5 className="text-xl font-bold text-blue-500 mt-5">
        Q2. How to validate React props using PropTypes ?
      </h5>
      <p className="mt-3">
        To validate React props using PropTypes, you need to follow these steps:
        Begin by importing the PropTypes library into your component using:
        import PropTypes from 'prop-types'; Define a prop types object for your
        component by assigning propTypes to it.
      </p>
      <h5 className="text-xl font-bold text-blue-500 mt-5">
        Q3. Tell us the difference between nodejs and express js?
      </h5>
      <p className="mt-3">
        {" "}
        Node.js is the underlying runtime environment that enables JavaScript to
        run on the server, while Express.js is a framework that provides a layer
        of abstraction and additional tools for building web applications on top
        of Node.js. Express.js leverages the capabilities of Node.js and
        simplifies the process of handling HTTP requests and building
        server-side applications.
      </p>
      <h5 className="text-xl font-bold text-blue-500 mt-5">
        Q4. What is a custom hook, and why will you create a custom hook?
      </h5>
      <p className="mt-3 mb-32">
        A custom hook in React is a reusable JavaScript function that
        encapsulates stateful logic for components. It promotes code
        reusability, abstraction, and modularization. Custom hooks are created
        to avoid code duplication, simplify complex logic, compose multiple
        hooks, and facilitate easier testing of specific functionality in
        isolation.
      </p>
    </div>
  );
};

export default Blog;
