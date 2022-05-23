import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { pages } from '../../constants/pages'

export const PageTitle = () => {
  const { asPath: path } = useRouter();

  if (path === '/_error') return null;

  const slashCount = (path.match(/\//g) || []).length;

  let title: string;

  if (slashCount === 1) {
    const { name } = pages.find(page => page.route === path)
    title = name === 'Home' ? 'Campos Incorporadora' : `${name} | Campos Incorporadora`;
  } else {    
    const enterpriseName = path.split('/').pop();
    title = enterpriseName === '[name]' ? 'Campos Incorporadora' : `${enterpriseName} | Campos Incorporadora`
  }

  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
