import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Figure from "../Image/Figure"

const PropItem = ({ headline, teaser, btn, classNames }) => {
  return (
    <article
       className={classNames}
      >
      <Figure
        src="http://via.placeholder.com/75x75"
      />
      <div className="ml3-l ml2">
        <h4 className="ttc fw3 f3 mt2-l mt3">{headline}</h4>
        <p className="lh-copy">{teaser}</p>
        <a href="/demo/" className="br2 ba ph3 pv2 mb3 dib tc fw4 ba b--blue blue justify-center mt4 link">
          {btn}
        </a>
      </div>
    </article>
  );
};

PropItem.propTypes = {
  src: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired
};

export default PropItem;
