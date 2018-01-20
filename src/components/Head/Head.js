import React from "react";
import Helmet from "react-helmet";

const Head = ({ data }) => {

  return <Helmet>
      <html amp="amp" />
      <title>{data.site.siteMetadata.title}</title>
      <link rel="canonical" href={data.site.siteMetadata.url} />
      <meta name="description" content={data.site.siteMetadata.description} />
      {/* 
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={t.meta_title} />
      <meta property="og:description" content={t.meta_description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="600" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@usepolis" />
      <meta name="twitter:title" content={t.meta_title} />
      <meta name="twitter:description" content={t.meta_description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="keywords" content={home.keywords} /> */}

      {/* <link rel="shortcut icon" type="image/png" href={`${}/images/favicon.ico`} /> */}
    </Helmet>;
};

export default Head;
