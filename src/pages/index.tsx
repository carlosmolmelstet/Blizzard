import { GetStaticProps } from 'next';
import React from 'react'
import Hero from '../components/Hero/Index';

export default function Home(props) {
  return (
    <Hero />
  )
}

export const getStaticProps: GetStaticProps = async () => {


  return {
    props: {}
  }
}
