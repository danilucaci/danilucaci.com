import React from "react";

import config from "../../../data/SiteConfig";

import ChangeLang from "../ChangeLang/ChangeLang";
import SocialNav from "../SocialNav/SocialNav";

const SiteFooter = () => {
  return (
    <footer className="l-row o-site__footer u-clearfix">
      <div className="l-row--pad l-col l-col--center l-contain">
        <ChangeLang />
        <SocialNav />
        <p className="copy copy--b copy--s">{config.copyright}</p>
        <p className="copy copy--s">{config.builtWith}</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
