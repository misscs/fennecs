import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Hero = ({ headline, subheadline, className }) => {
  return <header className={classnames("mb2", "mb3-m", "mb4-l", "pv4", "ph5", className)}>
      <div className="ph4 measure">
        <h1 className="f2 f1-ns ttc bodoni lh-solid lh-title-ns  mt4 mb3 fw4">
          {headline}
        </h1>
        <p className="f4 f3-ns mb4 lh-copy">{subheadline}</p>
      </div>
    </header>;
}

Hero.propTypes = {
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Hero
