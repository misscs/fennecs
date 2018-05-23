import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Hero = ({ headline, subheadline, className }) => {
  return <header className={classnames("mb2", "mb3-m", "mb4-l", "pv4", "ph5-l", "ph3", className)}>
      <div className="ph4">
        <h1 className="f1 f-subheadline-l ttc bodoni lh-title mt4 mb3 fw4 w-80-l">
          {headline}
        </h1>
        <p className="f4 f3-m mb4 lh-copy f2-l">{subheadline}</p>
      </div>
    </header>;
}

Hero.propTypes = {
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Hero
