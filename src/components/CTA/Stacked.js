import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Figure from '../Core/Image/Figure'

const StatckedCTA = ({ headline, subheadline, className }) => {
  return <section className={classnames("mb2", "mb3-m", "mb4-l", "ph3", "ph5-l", "pv4", "bg-washed-yellow", className)}>
      <header className="">
        <h2 className="f4 ttc bodoni lh-title  mb3 fw5">
          {headline}
        </h2>
        <p className="f5 mb4 measure lh-copy">{subheadline}</p>
      </header>

      <div>
        <a href="/demo/" className="bt b--yellow dib pt3 mt2 link light-blue">
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
