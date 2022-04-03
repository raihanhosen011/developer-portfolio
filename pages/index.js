/* =================================================
------------------------------------------------
  Name      : Developer portfolio 
  Author    : Raihan Hosen
  Date      : 01/01/2022
  gmail     : raihanhosen011@gmail.com
  github    : https://github.com/raihanhosen011
------------------------------------------------
==================================================*/

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Hero from '@components/pages/Hero'
import locales from '../locales';


export default function Index({ content }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type : "GET_DATA", payload : content })
  }, [content, dispatch])

  return (
    <Hero />
  )
}

export const getStaticProps = ({ locale }) => {
  return {
    props: {
      content: locales[locale],
    },
  };
};