/* =================================================
------------------------------------------------
  Name      : Developer portfolio 
  Author    : Raihan Hosen
  Date      : 01/01/2022
  gmail     : raihanhosen011@gmail.com
  github    : https://github.com/raihanhosen011
------------------------------------------------
==================================================*/

import Layout from '@components/Layout'
import { Hero, About } from '@components/Home'

import locales from '../locales';

export default function Index({ content }) {
  const {
    navdata,
    herodata,
    social
  } = content

  return (
    <Layout navData={navdata} >
       <Hero herodata={herodata} social={social} />
       {/* <About /> */}
    </Layout>
  )
}


export const getStaticProps = ({ locale }) => {
  return {
    props: {
      content: locales[locale],
    },
  };
};
