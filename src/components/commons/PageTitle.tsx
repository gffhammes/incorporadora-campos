import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { pages } from '../../constants/pages'

export const PageTitle = () => {
  const { asPath: path } = useRouter();

  if (path === '/_error') return null;

  const currentPage = pages.find(page => page.route === path)
  const title = currentPage?.name === 'Home' || !currentPage ? 'Campos Incorporadora' : `${currentPage.name} | Campos Incorporadora`;

  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
