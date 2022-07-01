import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { enterprises } from '../../assets/enterprises'
import { pages } from '../../constants/pages'

export const PageTitle = () => {
  const { asPath: path } = useRouter();

  if (path === '/_error') return null;

  const slashCount = (path.match(/\//g) || []).length;
  const hashtagCount = (path.match(/#/g) || []).length;

  let title: string;

  if (slashCount === 1) {
    const currentPage = pages.find(page => page.route === path)
    title = currentPage?.name === 'Home' || !currentPage ? 'Campos Incorporadora' : `${currentPage.name} | Campos Incorporadora`;
  } else if (path.includes('empreendimentos')) {
    let enterprisePath = path.split('/').pop();
    enterprisePath = enterprisePath.split('#')[0];

    if (enterprisePath === '[name]') {
      title = 'Campos Incorporadora'
    } else {
      const enterpriseName = enterprises.find(enterprise => enterprise.slug === enterprisePath)?.name;
      title = `${enterpriseName} | Campos Incorporadora`
    }
  } else if (path.includes('confirmacao')) {
    title = "Obrigado | Campos Incorporadora"
  }

  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
