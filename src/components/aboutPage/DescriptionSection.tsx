import { Box, Container, Stack, Typography} from '@mui/material'
import React from 'react'
import { defaultSectionPadding } from '../../constants/defaultSectionPadding'

type Props = {}

const text = `<strong>A Campos Incorporadora tem em seu DNA a inspiração.</strong>

Nasceu inspirada na conexão entre amigos motivados pelo desejo de crescer, buscar algo novo e empreender. O que era desejo se tornou realidade através da formação de um grupo de investimentos. Grupo este que olha para o futuro, que busca o resultado através da relação "ganha-ganha" e que preza pela qualidade de vida dos seus parceiros.

Seus empreendimentos foram cuidadosamente nominados com praças italianas. Que denota robustez, imponência, características arquitetônicas marcantes, planejamento dos espaços, convergência e centralidade.
`

const DescriptionSection = (props: Props) => {
  return (
    <Box id='description'>
      <Container sx={{ py: { xs: 10, lg: 20} }}>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={10} alignItems='center' justifyContent='center'>
          <Box sx={{ height: { xs: 'unset', sm: '25rem' }, width: { xs: '100%', sm: 'unset' }, aspectRatio: '1.35 / 1', position: 'relative' }}>
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/images/sobre-nos-campos.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '100%'
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
                transition: '300ms ease all',
                boxShadow: '15px 31px 82px rgba(18, 50, 131, .48)',
                '& > div': {
                  color: 'transparent',
                },
                '&:hover': {
                  backgroundColor: 'rgba(26, 71, 188, .87)',
                  '& > div': {
                    color: 'white',
                  },
                }
              }}
              >
                <Stack
                  sx={{
                    transition: '300ms ease all',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    p: { xs: 5, sm: 10 }
                  }}
                  justifyContent='center'
                >
                  <Typography fontSize={{ xs: 16, sm: 32 }} fontWeight={300} letterSpacing={5} lineHeight={2.25}>
                    MAIS DO QUE<br/>
                    EMPREENDIMENTOS,<br/>
                    <strong style={{ fontWeight: 500 }}>
                      VERDADEIRAS<br/>
                      CONEXÕES
                    </strong>
                  </Typography>
                </Stack> 
              </Box>
          </Box>
          <Box>
            <Box
              component='p'
              dangerouslySetInnerHTML={{ __html: text }}
              sx={{ whiteSpace: 'pre-wrap', maxWidth: '46ch', fontSize: 15 }}
            />
          </Box>
        </Stack>
      </Container>  
    </Box>
  )
}

export default DescriptionSection