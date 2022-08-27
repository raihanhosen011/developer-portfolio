import Head from "next/head";

const HomeMeta = () => {
  return (
    <Head>
      <link rel="icon" type="image/x-icon" href="/icons/favicon.ico"></link>
      <title>Raihan Hosen : Portfolio</title>
      <meta name="description" content='Raihan Hosen is a Full Stack Developer, pasionate about implementing incredible solutions and designs using React, Next.js, Node.js and MongoDB. ' />
      <meta
        name="keywords"
        content="portfolio, personal website, web developer, fullstack developer"
      />
      <meta property="og:site_name" content="Raihan Hosen" />
      <meta property="og:title" content='Raihan Hosen : Portfolio' />
      <meta property="og:description" content='Raihan Hosen is a Full Stack Developer, pasionate about implementing incredible solutions and designs using React, Next.js, Node.js and MongoDB. ' />
      <meta property="og:url" content='https://raihanhosen.com/' />
      <meta property="og:image" content='' />
      <meta property="og:type" content="website" />
      <meta name="linkedin:card" content="summary" />
      <meta name="linkedin:site" content="@raihanhosen01" />
      <meta name="linkedin:creator" content="@raihanhosen01" />
      <meta name="linkedin:description" content='Raihan Hosen is a Full Stack Developer, pasionate about implementing incredible solutions and designs using React, Next.js, Node.js and MongoDB. ' />
      <meta name="linkedin:image" content='' />
    </Head>
  );
};

export default HomeMeta;
