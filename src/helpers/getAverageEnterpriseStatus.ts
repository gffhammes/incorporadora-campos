interface IDetailedStatus {
  infrastructure: number;
  foundation: number;
  masonry: number;
  installations: number;
  coating: number;
}

export const getAverageEnterpriseStatus = (detailedStatus: IDetailedStatus) => {  
  const total = detailedStatus.infrastructure + detailedStatus.foundation + detailedStatus.masonry + detailedStatus.installations + detailedStatus.coating;
  const average = total / 5;
  return average;
}