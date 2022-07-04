import { Box, Container, Stack, Typography } from '@mui/material'
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
    <Box sx={{ position: 'absolute', zIndex: '1500', height: 'fit-content', width: '100%', bottom: 0, mb: 20 }}>
      <Container>
        <Stack direction='row' spacing={5} justifyContent='center' alignItems='center'>          
          <Typography sx={{ color: 'white' }}>FILTROS</Typography>
          <Select label='Cidade' name='city' options={addClearOptionToOptions(cities)} value={city} handleChange={handleCityChange} width='12rem' />
          <Select label='Bairro' name='district' options={districtsOptions} value={district} handleChange={handleDistrictChange} width='12rem' />
          <Select label='Fase da Obra' name='buildingStatus' options={addClearOptionToOptions(statusOptions)} value={buildingStatus} handleChange={handleStatusChange} />
          <ContainedWhiteButton onClick={() => handleFilter({ city, district, buildingStatus })} >BUSCAR</ContainedWhiteButton>
        </Stack>
      </Container>
    </Box>
  )
}

export default Filters