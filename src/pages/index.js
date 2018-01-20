import React from 'react'
import Hero from '../components/Hero/Hero'
import Trust from "../components/Trust/Trust";


const IndexPage = () => (
  <div>
    <Hero
      headline="Know what your society is thinking"
      subheadline="Polis is a social research platform that helps you gather insights."
      className="page-header"
    />
    <Trust
      headline="You’re in good company"
      subheadline="Polis is trusted by governments, universities, non-profits, movements, and large organizations."
    />
  </div>
);

export default IndexPage
