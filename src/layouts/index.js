import React from "react";
import PropTypes from "prop-types";
import Head from "../components/Head/Head";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

import "./index.css"

const localData = {
  footer: {
    copyright: "Polis Technology Inc. All Rights Reserved.",
    social: ["https://github.com/pol-is/", "https://twitter.com/usepolis"],
    groups: [
      {
        heading: "Company",
        links: [
          {
            title: "About",
            url: "https://pol.is/company"
          },
          {
            title: "Blog",
            url: "https://blog.pol.is/"
          }
        ]
      },
      {
        heading: "Support",
        links: [
          {
            title: "FAQ",
            url: "https://pol.is/company"
          }
        ]
      },
      {
        heading: "Legal",
        links: [
          {
            title: "Terms",
            url: "https://pol.is/tos"
          },
          {
            title: "Privacy",
            url: "https://pol.is/privacy"
          }
        ]
      }
    ]
  }
};

const TemplateWrapper = ({ children, data }) => (
  <div className="pt6 avenir">
    <Head data={data} />
    <Nav />
    <main role="main" className="center">
      {children()}
    </main>
    <Footer
      social={localData.footer.social}
      content={localData.footer.groups}
      data={localData.footer}
    />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        url
      }
    }
  }
`;
