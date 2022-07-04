import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { ContainedWhiteButton, LoadingButton } from '../commons/Button'
import { Select } from '../commons/Select'

interface IProps {
  enterprises: any;
  handleFilter({city, district, buildingStatus}: {city: string, district: string, buildingStatus: string}): void;
}

const selectAll = 'Todas as opções'

const Filters = ({ enterprises, handleFilter }: IProps) => {
  const [city, setCity] = useState<string>('')
  const [district, setDistrict] = useState<string>('')
  const [buildingStatus, setBuildingStatus] = useState<string>('')
  const [districtsOptions, setDistrictsOptions] = useState<string[]>([])
  const cities = []
  const statusOptions = []

  const getDistrictsOptions = useCallback((city: string, enterprises: any[]) => {
    const districts = []

    enterprises.forEach((enterprise) => {
      if (enterprise.city === city) {
        if (!districts.includes(enterprise.district)) districts.push(enterprise.district)
      }
    })

    return [ selectAll, ...districts]
  }, [])

  useEffect(() => {    
    const districtsOptions = city ? getDistrictsOptions(city, enterprises) : ['Selecione uma cidade']
    setDistrictsOptions(districtsOptions)
    setDistrict('')
  }, [city, enterprises, getDistrictsOptions])

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === selectAll) {
      setCity('');
      return;
    }
    setCity(e.target.value);
  }

  const handleDistrictChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === 'Selecione uma cidade') return;
    if (e.target.value === selectAll) {
      setDistrict('');
      return;
    }
    setDistrict(e.target.value)
  }

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === selectAll) {
      setBuildingStatus('');
      return;
    }
    setBuildingStatus(e.target.value)
  }

  enterprises.forEach((enterprise) => {
    if (!cities.includes(enterprise.city)) cities.push(enterprise.city)
    if (!statusOptions.includes(enterprise.status)) statusOptions.push(enterprise.status)   
  })

  const addClearOptionToOptions = (options) => {
    return [ selectAll, ...options ]
  }

  return (
    <Grid container spacing={{ xs: 2, lg: 5 }}>
      <Grid item xs={12} lg={1}>
        <Typography textAlign={{ xs: 'center', lg: 'left' }} sx={{ color: 'white' }}>FILTROS</Typography>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Select label='Cidade' name='city' options={addClearOptionToOptions(cities)} value={city} handleChange={handleCityChange} width='100%' />
      </Grid>
      <Grid item xs={12} lg={3}>
        <Select label='Bairro' name='district' options={districtsOptions} value={district} handleChange={handleDistrictChange} width='100%' />
      </Grid>
      <Grid item xs={12} lg={3}>
        <Select label='Fase da Obra' name='buildingStatus' options={addClearOptionToOptions(statusOptions)} value={buildingStatus} handleChange={handleStatusChange} />
      </Grid>
      <Grid item xs={12} lg={2} sx={{ display: 'flex' }}>
        <ContainedWhiteButton sx={{ mx: 'auto' }} onClick={() => handleFilter({ city, district, buildingStatus })} >BUSCAR</ContainedWhiteButton>            
      </Grid>
    </Grid>
  )
}

export default Filters