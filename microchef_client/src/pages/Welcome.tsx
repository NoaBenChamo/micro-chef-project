import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useNavigate } from 'react-router-dom'
import fullLogo from '../assets/full-logo.png'

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <Box 
      sx={{ 
        height: 'calc(100vh - 65px)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%)',
        overflow: 'hidden',
        pr: { xs: 4, md: 8 },  // רווח רגיל בצד ימין
        pl: { xs: 6, md: 24 }   // רווח ענק ומודגש בצד שמאל שמזיז את הכל ימינה
      }}
    >
      {/* מיכל מרכזי */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column-reverse', md: 'row' }, 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: { xs: 0, md: 0 }, 
          maxWidth: '1400px', 
          width: '100%' 
        }}
      >
        
        {/* צד שמאל של המסך: תוכן שיווקי */}
        <Box sx={{ flex: 1.1, textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
          <Stack spacing={3}>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontWeight: 800, 
                fontSize: { xs: '2.5rem', sm: '3.2rem', md: '3.8rem' }, 
                color: '#365c00', 
                letterSpacing: '-0.5px',
                lineHeight: 1.1
              }}
            >
              Smart Fridge.
              <br />
              Zero Waste.
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#4b5563', 
                fontWeight: 400, 
                lineHeight: 1.6,
                fontSize: { xs: '1.05rem', sm: '1.2rem' },
                maxWidth: '540px',
                mx: { xs: 'auto', md: 0 }
              }}
            >
              The culinary revolution starts in your refrigerator. MICROCHEF tracks your ingredients, reduces food waste, and suggests creative recipes based on what you already have.
            </Typography>

            <Box sx={{ pt: 2 }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/dashboard')}
                sx={{
                  backgroundColor: '#8eb652',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  px: 4,
                  py: 1.8,
                  borderRadius: '16px',
                  textTransform: 'none',
                  boxShadow: '0 4px 14px rgba(142, 182, 82, 0.4)',
                  '&:hover': {
                    backgroundColor: '#5d9c00',
                    boxShadow: '0 6px 20px rgba(93, 156, 0, 0.4)'
                  }
                }}
              >
                Get Started
              </Button>
            </Box>
          </Stack>
        </Box>

        {/* צד ימין של המסך: הלוגו הגדול */}
        <Box sx={{ flex: 0.9, display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Box
            component="img"
            src={fullLogo}
            alt="Micro Chef Full Logo"
            sx={{
              width: { xs: '240px', sm: '340px', md: '100%' }, 
              maxWidth: '480px', // הגדלנו עוד קצת את הגבול המקסימלי של הלוגו לבקשתך
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0px 15px 30px rgba(93, 156, 0, 0.15))',
              transition: 'transform 0.5s ease-in-out',
              '&:hover': {
                transform: 'rotate(2deg) scale(1.02)'
              }
            }}
          />
        </Box>

      </Box>
    </Box>
  )
}