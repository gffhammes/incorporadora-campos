import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { ContainedWhiteButton } from "../commons/Button";
import { Select } from "../commons/Select";
import SearchIcon from "@mui/icons-material/Search";

interface IProps {
  enterprises: any;
  handleFilter({
    city,
    district,
    buildingStatus,
  }: {
    city: string;
    district: string;
    buildingStatus: string;
  }): void;
}

const selectAll = "Todas as opções";

const Filters = ({ enterprises, handleFilter }: IProps) => {
  const theme = useTheme();
  const sizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const sizeLg = useMediaQuery(theme.breakpoints.up("lg"));
  const [city, setCity] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [buildingStatus, setBuildingStatus] = useState<string>("");
  const [districtsOptions, setDistrictsOptions] = useState<string[]>([]);
  const cities = [];
  const statusOptions = [];

  const getDistrictsOptions = useCallback(
    (city: string, enterprises: any[]) => {
      const districts = [];

      enterprises.forEach((enterprise) => {
        if (enterprise.attributes.Endereco.Cidade === city) {
          if (!districts.includes(enterprise.attributes.Endereco.Bairro))
            districts.push(enterprise.attributes.Endereco.Bairro);
        }
      });

      return [selectAll, ...districts];
    },
    []
  );

  useEffect(() => {
    const districtsOptions = city
      ? getDistrictsOptions(city, enterprises)
      : ["Selecione uma cidade"];
    setDistrictsOptions(districtsOptions);
    setDistrict("");
  }, [city, enterprises, getDistrictsOptions]);

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === selectAll) {
      setCity("");
      return;
    }
    setCity(e.target.value);
  };

  const handleDistrictChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "Selecione uma cidade") return;
    if (e.target.value === selectAll) {
      setDistrict("");
      return;
    }
    setDistrict(e.target.value);
  };

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === selectAll) {
      setBuildingStatus("");
      return;
    }
    setBuildingStatus(e.target.value);
  };

  enterprises.forEach((enterprise) => {
    if (!cities.includes(enterprise.attributes.Endereco.Cidade))
      cities.push(enterprise.attributes.Endereco.Cidade);
    if (!statusOptions.includes(enterprise.attributes.Status))
      statusOptions.push(enterprise.attributes.Status);
  });

  const addClearOptionToOptions = (options) => {
    return [selectAll, ...options];
  };

  return (
    <Grid container spacing={{ xs: 2, lg: 5 }} alignItems="center">
      <Grid item xs={12} sm={1.5} lg={1} sx={{ display: "flex" }}>
        <Typography
          textAlign={{ xs: "center", lg: "left" }}
          sx={{ color: "white", mx: "auto" }}
        >
          FILTROS
        </Typography>
      </Grid>
      <Grid item xs={12} sm={2.5} lg={3} sx={{ display: "flex" }}>
        <Select
          label="Cidade"
          name="city"
          options={addClearOptionToOptions(cities)}
          value={city}
          handleChange={handleCityChange}
          width="100%"
        />
      </Grid>
      <Grid item xs={12} sm={3} lg={3} sx={{ display: "flex" }}>
        <Select
          label="Bairro"
          name="district"
          options={districtsOptions}
          value={district}
          handleChange={handleDistrictChange}
          width="100%"
        />
      </Grid>
      <Grid item xs={12} sm={4} lg={3} sx={{ display: "flex" }}>
        <Select
          label="Fase da Obra"
          name="buildingStatus"
          options={addClearOptionToOptions(statusOptions)}
          value={buildingStatus}
          handleChange={handleStatusChange}
        />
      </Grid>
      <Grid item xs={12} sm={1} lg={2} sx={{ display: "flex" }}>
        {(sizeLg || !sizeSm) && (
          <ContainedWhiteButton
            sx={{ mx: "auto" }}
            onClick={() => handleFilter({ city, district, buildingStatus })}
          >
            BUSCAR
          </ContainedWhiteButton>
        )}
        {!sizeLg && sizeSm && (
          <IconButton
            sx={{ color: "white" }}
            onClick={() => handleFilter({ city, district, buildingStatus })}
          >
            <SearchIcon />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
};

export default Filters;
