import React from "react";
import PropTypes from "prop-types";

const CTA = ({ headline }) => {
  return (
    <aside className="ph4 pv4 pv2-ns flex-ns justify-center items-center">
      <div className="mw6">
        <h3 className="f3 mb1 mw5 lh-title">Find out why so many organization use Polis</h3>
        <p className="f4 lh-copy">Request a demo with one of our specialists to find out how Polis is right for your organization.</p>
      </div>
      <div className="mla">
        <a href="/demo/" className="br3 ba ph4 pv3  tc ttu fw6 bg-blue white justify-center link">
          Get Started
        </a>
      </div>
    </aside>
  );
};

CTA.propTypes = {
  headline: PropTypes.any.isRequired,
};

export default CTA;
