import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import PropItem from "../Core/Prop/PropItem";

const localData = {
  values: {
    headline: "Our mission is to help people understand each other",
    props: [
      {
        btn: "Learn more",
        src: "http://via.placeholder.com/75x75",
        headline: "Participation & Engagement",
        teaser:
          "Polis is a system for gathering and analyzing opinions from large groups of people in real time. "
      },
      {
        btn: "Learn more",
        src: "http://via.placeholder.com/75x75",
        headline: "Documentation",
        teaser:
          "Polis features extensive documentation, both about its technical features and implementation methodology best practices."
      },
      {
        btn: "Learn more",
        src: "http://via.placeholder.com/75x75",
        headline: "Internaltional Community",
        teaser: "There is a community of people around the world using Polis. Connect with them here"
      },
      {
        btn: "Lean more",
        src: "http://via.placeholder.com/75x75",
        headline: "Open by Default",
        teaser: "Polis is open source software. Find it here Github."
      }
    ]
  }
};


const FeatureSection = ({ data }) => {
  return <section className={classnames("mb2", "mb3-m", "mb4-l", "ph5", "pv4","center")}>
      <header className="ph4">
        <h2 className="f2 f1-l ttc bodoni lh-copy  mb5 fw4 mw7 ">
          { localData.values.headline }
        </h2>
        {/* <p className="f4 f3-l measure center">{localData.values.subheadline}</p> */}
      </header>

      <div className="flex flex-column flex-row-ns flex-wrap-ns">
        {localData.values.props.map(item => (
          <PropItem
            headline={item.headline}
            teaser={item.teaser}
            classNames = "w-40 bt bw1 b--light-blue shadow-2 ph3 pv4 ma4 flex"
            btn={item.btn}
          />
        ))}
      </div>
    </section>;
};

FeatureSection.propTypes = {
  // data: PropTypes.object.isRequired
};

export default FeatureSection;
