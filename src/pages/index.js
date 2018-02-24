import React from 'react'
import Hero from '../components/Hero/Hero'
import Trust from "../components/Trust/Trust";
import CTA from "../components/CTA/CTA";
import FeatureSection from "../components/Features/FeatureSection";

const IndexPage = ({ data }) => (
  <div>
    <Hero
      headline="Know what your society is thinking"
      subheadline="Polis helps organizations understand themselves. Get a summary visualization of all the viewpoints to move a conversation forward."
      className="page-header"
    />
    <Trust
      headline="You’re in good company"
      subheadline="Polis is trusted by governments, universities, non-profits, movements, and large organizations."
    />
    <FeatureSection  />
    <CTA />
  </div>
);

export default IndexPage

// export const query = graphql`
//   query IndexQuery {
//     dataYaml {
//       values {
//         headline
//       }
//     }
//   }
// `;

