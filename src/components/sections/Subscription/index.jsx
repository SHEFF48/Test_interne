import React from "react";
import PropTypes from "prop-types";

const Subscription = () => {
  return (
    <section>
      <div className="container">
        <h2 className="title">Subscription title</h2>
        <p>description</p>
        <div className="form">
          <input type="text" />
          <button>Subscripbe</button>
        </div>
      </div>
    </section>
  );
};

Subscription.propTypes = {};

export default Subscription;
