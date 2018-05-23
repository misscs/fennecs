import React from 'react'
import Hero from '../components/Hero/Hero'
import Trust from "../components/Trust/Trust";
import StackedCTA from "../components/CTA/Stacked";
import FeatureSection from "../components/Features/FeatureSection";

const IndexPage = ({ data }) => (
  <div className="black-70">
    <Hero
      headline="You're on your way to know what your community is thinking—"
      subheadline="Your Polis instance is running successfully!"
      className="page-header"
    />
    <StackedCTA
      headline="Don't worry, participants will not see this page."
      subheadline="If you plan on having others log into your instance to create conversations, you may want to relace this page to welcome them."
    />
    <FeatureSection  />
    <Trust
      headline="Trusted"
      className="bg-washed-yellow pv4"
    />

    <Trust
      headline="Featured in media around the world"
      className="pv6"

    />

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

