import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Hero = ({ headline, subheadline, className }) => {
  return <header className={classnames("mb2", "mb3-m", "mb4-l", "pb3", className)}>
      <div className="ph4 measure">
        <h1 className="f1 ttc bodoni lh-solid lh-title-m  mt4 ">
          {headline}
        </h1>
        <p className="f4 f3-l">{subheadline}</p>
        <a href="https://pol.is/demo" className="ttu">Get Started</a>
        <p>Already using Polis? 
          <a href="https://pol.is/home/signin" className="link ml2">
            Sign In
          </a>
        </p>
      </div>
    </header>;
}

Hero.propTypes = {
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Hero
