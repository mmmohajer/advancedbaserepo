import Head from "next/head";

import { APP_DOMAIN_FOR_CLIENT_SIDE, APP_NAME } from "config";

const Seo = ({
  title = "Page Title",
  keywords = "Page_KEYWORDS",
  description = `Page_DESCRIPTION`,
  imagePreview = "",
  url = APP_DOMAIN_FOR_CLIENT_SIDE,
  imgAlt = "IMAGE ALT",
  hidden_to_search_engines = false,
  structuredData = {},
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={url} />
        <meta name="description" content={description} />
        <meta name="keywords" content={`${keywords}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imagePreview} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={APP_NAME} />
        <meta name="twitter:card" content={imgAlt || title} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imagePreview} />
        <meta name="twitter:url" content={url} />
        {hidden_to_search_engines ? (
          <meta name="robots" content="noindex,nofollow,noarchive" />
        ) : (
          ""
        )}
        {Object.keys(structuredData)?.length ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        ) : (
          ""
        )}
      </Head>
      {children}
    </>
  );
};

export default Seo;
