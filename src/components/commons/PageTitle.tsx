import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { pages } from '../../constants/pages'

export const PageTitle = () => {
  const { pathname } = useRouter()

  if (pathname === '/_error') return null;

  const { name } = pages.find(page => page.route === pathname)

  const title = name === 'Home' ? 'Campos Incorporadora' : `${name} | Campos Incorporadora`;

  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
