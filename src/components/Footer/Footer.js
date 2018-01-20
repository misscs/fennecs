import React from "react";
import PropTypes from "prop-types";
import { SocialIcon } from "tachyons-react-social-icons";

import Logo from "../Core/Logo/Logo";
import ListItem from "../Core/List/ListItem";

const Footer = ({ social, content, data }) => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-dark-blue white pl3 pl4-ns pr4 pr6-large pt4 pb5 mt5 flex flex-wrap justify-between items-start cb"
    >
      <Logo width="60px" height="32px" />

      {content.map((group, i) => (
        <div key={group.heading}>
          <h4 className="f4 white mb3 fw3 tu">{group.heading}</h4>
          <ul className="list">
            {group.links.map((link, i) => (
              <ListItem key={i} className="f6 mb3">
                <a href={link.url} className="white link">
                  {link.title}
                </a>
              </ListItem>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt4 mt0-ns w-100 w-auto-ns">
        <p>&copy; {currentYear} {data.copyright }</p>
        {social.map((url, i) => (
          <SocialIcon
            key={`icon-${i}`}
            url={url}
            color="white"
            className="mr3 mt3"
          />
        ))}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  social: PropTypes.array.isRequired,
  content: PropTypes.array.isRequired
};

export default Footer;
