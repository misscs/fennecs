import React from "react";
import Logo from "../Core/Logo/Logo";
import { throttle } from "lodash";

const t = {
  cta: "Requst a Demo"
};

class Nav extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", throttle(this.onScroll.bind(this), 200));
  }

  onScroll(event) {
    const elem = document.getElementById("cta-button");
    if (elem && window.scrollY > elem.offsetTop + elem.offsetHeight) {
      this.button.classList.remove("btn-ghost");
    } else {
      this.button.classList.add("btn-ghost");
    }
  }

  render() {
    return (
      <nav
        role="banner"
        className="fixed top-0 left-0 right-0 bg-white z-1 w-100 ph3 ph4-ns pv3"
      >
        <div className="flex flex-wrap justify-between items-center">
          <Logo width="60px" height="32px" />
          <a
            href="/visit/"
            ref={button => (this.button = button)}
            className="btn btn-ghost white w-100 w-auto-ns mt3 mt0-ns ph3"
          >
            {t.cta}
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
