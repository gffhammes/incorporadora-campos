
export const getLocationString = (enterprise) => {
  if (!enterprise) return "";

  if (!enterprise.Endereco.Bairro) {
    return enterprise.Endereco.Cidade;
  }

  return `${enterprise.Endereco.Bairro} - ${enterprise.Endereco.Cidade}`;
}