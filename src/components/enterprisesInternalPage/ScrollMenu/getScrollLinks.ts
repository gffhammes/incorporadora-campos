export const getScrollLinks = (Seccoes) => {
  const scrollLinks = [
    {
      label: "O Empreendimento",
      targetId: "the-enterprise",
    },
  ];

  if (Seccoes.Diferenciais) {
    scrollLinks.push({
      label: "Diferenciais",
      targetId: "differentials",
    });
  }

  if (Seccoes.Plantas) {
    scrollLinks.push({
      label: "Opções de Planta",
      targetId: "plan-options",
    });
  }

  if (Seccoes.Mapa) {
    scrollLinks.push({
      label: "Localização",
      targetId: "localization",
    });
  }

  return scrollLinks;
};
