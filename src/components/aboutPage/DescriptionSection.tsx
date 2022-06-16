import { Box, Container, Stack, Typography} from '@mui/material'
import React from 'react'
import { defaultSectionPadding } from '../../constants/defaultSectionPadding'

type Props = {}

const text = `Campos Incorporadora tem em seu DNA a inspiração.

Nasceu inspirada na conexão entre amigos motivados pelo desejo de crescer, buscar algo novo e empreender. 

Seus empreendimentos foram cuidadosamente nominados com praças italianas. Que denota robustez, imponência, características arquitetônicas marcantes, planejamento dos espaços, convergência e centralidade.

Muito bem ancorados em seu propósito, o crescimento da Campos Incorporadora acontece de forma acelerada. Entendendo que mais pessoas podem fazer parte dessa construção, surge dessa forma o sistema de Sócios Investidores, um projeto inovador que permite que seus parceiros possam fazer parte desse movimento de forma especial.

Parcerias com grandes nomes reforçam a solidez e o momento especial da empresa. O eterno camisa 10, o craque Zico, marca mais um gol de placa e assina o residencial Del Mare.`

const DescriptionSection = (props: Props) => {
  return (
    <Box id='description'>
      <Container sx={{ py: 20 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={10} alignItems='center' justifyContent='center'>
          <Box sx={{ height: '28rem', aspectRatio: '1.25 / 1' }}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/images/sobre-nos-campos.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '100%'
              }}
            />
          </Box>
          <Box>
            <Typography fontSize={15} sx={{ whiteSpace: 'pre-wrap', maxWidth: '46ch' }}>{text}</Typography>
          </Box>
        </Stack>
      </Container>  
    </Box>
  )
}

export default DescriptionSection