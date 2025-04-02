import { Card, Box, Typography } from '@mui/material';

export default function App() {

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'flex-start'}
      width={'100vw'}
      height={'100vh'}
    
      bgcolor={'blue'}
    >
      <Card
      sx={{
        display: 'flex',
        flexDirection: 'colunm',
        justifycontent: 'center',
        alignItems: 'center ',
        widht: '100% ',
        marginTop: '160px'
      }}
      >

        <Box>
          Calculadora IMC
        </Box>

        <Box>
          entradas
        </Box>

        <Box>
          resultado
        </Box>

      </Card>
    </Box>
  )
}