import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Figure from '../Core/Image/Figure'

const Trust = ({ headline, subheadline, className }) => {
  return <section className={classnames("ph2", className)}>
      <header className="ph5 tc-ns center">
        <h2 className="f3 ttc lh-solid lh-title-m  mb5 fw4 ">
          {headline}
        </h2>
        <p className="f4 f3-l mb4 measure center lh-copy">{subheadline}</p>
      </header>

      <div className="flex flex-wrap justify-center">
        <Figure src="http://via.placeholder.com/140x140" className="mh3 mb2 ba br-100 bw2 b--white" />
        <Figure src="http://via.placeholder.com/140x140" className="mh3 mb2" />
        <Figure src="http://via.placeholder.com/140x140" className="mh3 mb2" />
        <Figure src="http://via.placeholder.com/140x140" className="mh3 mb2" />
      </div>
    </section>;
};

Trust.propTypes = {
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Trust;
