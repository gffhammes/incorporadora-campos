import { useRouter } from 'next/router';
import React from 'react'
import { getEnterpriseBySlug } from '../helpers/getEnterpriseBySlug'


const whatsappNumber = '5547991382244'

export const useWhatsappLink = () => {
  const { asPath: currentPath } = useRouter();
  let text: string; 

  if (currentPath.includes('empreendimentos')) {
    const enterpriseName = currentPath.split('/').pop();

    if (enterpriseName === 'empreendimentos') { 
      text = 'Olá! Vim pelo site e gostaria de mais informações!';
    } else {
      text = `Olá! Vim pelo site e gostaria de mais informações sobre o empreendimento ${getEnterpriseBySlug(enterpriseName)?.name}!`;
    }
  } else {
    text = 'Olá! Vim pelo site e gostaria de mais informações!';
  }
  const url = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURI(text)}&app_absent=0`
  return url;
}
