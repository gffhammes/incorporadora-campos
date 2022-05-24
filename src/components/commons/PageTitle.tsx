import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { enterprises } from '../../assets/enterprises'
import { pages } from '../../constants/pages'

export const PageTitle = () => {
  const { asPath: path } = useRouter();

  if (!path) return null;
  if (path === '/_error') return null;
  if (path === '/404') return null;

  const slashCount = (path.match(/\//g) || []).length;

  let title: string;

  if (slashCount === 1) {
    const { name } = pages.find(page => page.route === path)
    title = name === 'Home' ? 'Campos Incorporadora' : `${name} | Campos Incorporadora`;
  } else {
    const enterprisePath = path.split('/').pop();

    if (enterprisePath === '[name]') {
      title = 'Campos Incorporadora'
    } else {
      const enterpriseName = enterprises.find(enterprise => enterprise.slug === enterprisePath).name;
      title = `${enterpriseName} | Campos Incorporadora`
    }
  }

  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
