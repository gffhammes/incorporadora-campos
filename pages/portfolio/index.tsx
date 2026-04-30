import { HeroSection } from "../../src/components/enterprisesPage/HeroSection";
import { EnterprisesSection } from "../../src/components/enterprisesPage/EnterprisesSection";
import { Footer } from "../../src/components/commons/Footer/Footer";
import { useState } from "react";
import { scrollToTarget } from "../../src/helpers/scrollToTarget";
import { enterprises } from "../../src/data/enterprises";

export default function Portfolio() {
  const [filteredEnterprises, setFilteredEnterprises] = useState(enterprises);

  const handleFilter = (values: {
    city: string;
    district: string;
    buildingStatus: string;
  }) => {
    const filtered = enterprises.filter((enterprise) => {
      const passCityFilter =
        values.city !== ""
          ? enterprise.attributes.Endereco.Cidade === values.city
          : true;

      const passDistrictFilter =
        values.district !== ""
          ? enterprise.attributes.Endereco.Bairro === values.district
          : true;

      const passStatusFilter =
        values.buildingStatus !== ""
          ? enterprise.attributes.Status === values.buildingStatus
          : true;

      return passCityFilter && passDistrictFilter && passStatusFilter;
    });
    setFilteredEnterprises(filtered);
    scrollToTarget("enterprises");
  };

  return (
    <main style={{ height: "100%" }}>
      <HeroSection enterprises={enterprises} handleFilter={handleFilter} />

      <EnterprisesSection enterprises={filteredEnterprises} />

      <Footer />
    </main>
  );
}
