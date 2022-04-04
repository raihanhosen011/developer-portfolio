import Head from "next/head";

const HomeMeta = ({ homeMetaData: m }) => {
  return (
    <Head>
      {/* Home metadata */}
      <title>{m.title}</title>
      <meta name="description" content={m.description} />
      <meta
        name="keywords"
        content="portfolio, personal website, web developer, fullstack developer"
      />
      <meta property="og:site_name" content="Bryan Gama" />
      <meta property="og:title" content={m.title} />
      <meta property="og:description" content={m.description} />
      <meta property="og:url" content={m.url} />
      <meta property="og:image" content={m.image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@bgamas_" />
      <meta name="twitter:creator" content="@bgamas_" />
      <meta name="twitter:description" content={m.description} />
      <meta name="twitter:image" content={m.image} />
    </Head>
  );
};

export default HomeMeta;
