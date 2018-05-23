import React from "react";
import Logo from "../Core/Logo/Logo";
import { throttle } from "lodash";

const t = {
  create: "Create an Account",
  signin: "Sign In"
};

class Nav extends React.Component {

  render() {
    return <nav role="banner" className="fixed bg-blue top-0 left-0 right-0 bg-white z-1 w-100 ph3 ph4-ns pv3">
        <div className="flex flex-wrap justify-end items-center">
          <Logo width="60px" height="32px" className="mra" />
          <a href="https://pol.is/home/signin" className="link mr4 white">
            {t.signin}
          </a>
          <a href="https://pol.is/home/signin" className="link mr4 white">
            {t.create}
          </a>
        </div>
      </nav>;
  }
}

export default Nav;
