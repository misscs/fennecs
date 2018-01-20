import React from "react";
import PropTypes from "prop-types";
import Head from "../components/Head/Head";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

import "./index.css"

const TemplateWrapper = ({ children, data }) => (
  <div className="pt6 avenir">
    <Head data={data} />
    <Nav />
    <main role="main" className="center mw8">
      {children()}
    </main>
    <Footer
      social={data.dataYaml.footer.social}
      content={data.dataYaml.footer.groups}
      data={data.dataYaml.footer}
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
    dataYaml {
      footer {
        copyright
        social
        groups {
          heading
          links {
            url
            title
          }
        }
      }
    }
  }
`;
