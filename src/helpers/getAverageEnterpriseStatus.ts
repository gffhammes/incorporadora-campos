interface IDetailedStatus {
  Alvenaria: number;
  Fundacao: number;
  Infraestrutura: number;
  Instalacoes: number;
  Revestimentos: number;
}

export const getAverageEnterpriseStatus = (detailedStatus: IDetailedStatus) => {  
  const total = detailedStatus.Alvenaria + detailedStatus.Fundacao + detailedStatus.Infraestrutura + detailedStatus.Instalacoes + detailedStatus.Revestimentos;
  const average = total / 5 / 100;
  return average;
}