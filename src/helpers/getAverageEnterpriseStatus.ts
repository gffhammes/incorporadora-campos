interface IDetailedStatus {
  infrastructure: number;
  masonry: number;
  installations: number;
  coating: number;
}

export const getAverageEnterpriseStatus = (detailedStatus: IDetailedStatus) => {  
  const total = detailedStatus.infrastructure + detailedStatus.masonry + detailedStatus.installations + detailedStatus.coating;
  const average = total / 4;
  return average;
}