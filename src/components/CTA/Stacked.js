import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Figure from '../Core/Image/Figure'

const StatckedCTA = ({ headline, subheadline, className }) => {
  return <section className={classnames("mb2", "mb3-m", "mb4-l", "ph3", "pv4", "bg-washed-yellow", className)}>
      <header className="ph4 tc-ns center">
        <h2 className="f2 ttc bodoni lh-solid lh-title-m  mb3 mb5-l fw4">
          {headline}
        </h2>
        <p className="f4 f3-l mb4 measure center lh-copy">{subheadline}</p>
      </header>

      <div className="flex flex-wrap justify-center">
        <a href="/demo/" className="br3 ba ph4 pv3 mb3 dib tc fw5 bg-blue white justify-center link">
          Learn How to Customize this page
        </a>
      </div>
    </section>;
};

StatckedCTA.propTypes = {
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default StatckedCTA;
