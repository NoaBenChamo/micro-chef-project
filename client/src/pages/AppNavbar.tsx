import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import minLogo from '../assets/min-logo.png'
import { Link } from 'react-router-dom'

export default function AppNavbar() {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#ffffff', 
        color: '#1f2937', 
        borderBottom: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)' 
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, xl: 4 } }}>
        
        {/* צד שמאל: לוגו ושם המותג */}
        <Box 
          component={Link} 
          to="/" 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1, 
            textDecoration: 'none', 
            color: 'inherit' 
          }}
        >
          <img 
            src={minLogo} 
            alt="Micro Chef Logo" 
            style={{ height: '54px', width: '54px', objectFit: 'contain' }} 
          />
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 'bold', 
              fontSize: '1.5rem', 
              color: '#5d9c00', 
              letterSpacing: '0.5px' 
            }}
          >
            MICROCHEF
          </Typography>
        </Box>

        {/* מרכז: קישורי הניווט באנגלית (מסודרים משמאל לימין) */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
          <Button 
            component={Link} 
            to="/" 
            color="inherit" 
            sx={{ fontSize: '1.1rem', textTransform: 'none', color: '#3b4450', '&:hover': { color: '#5d9c00' } }}
          >
            Home
          </Button>
          <Button 
            component={Link} 
            to="/dashboard" 
            color="inherit" 
            sx={{ fontSize: '1.1rem', textTransform: 'none', color: '#3b4450', '&:hover': { color: '#5d9c00' } }}
          >
            My Fridge
          </Button>
          <Button 
            component={Link} 
            to="/inventory" 
            color="inherit" 
            sx={{ fontSize: '1.1rem', textTransform: 'none', color: '#3b4450', '&:hover': { color: '#5d9c00' } }}
          >
            Inventory & Stats
          </Button>
        </Box>

        {/* צד ימין: אזור הפעמון וההתחברות */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          
          {/* אייקון פעמון אמיתי עם Badge של התראות */}
          <IconButton color="inherit" sx={{ color: '#5d6571' }}>
            <Badge variant="dot" color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* כפתור התחברות מעוצב באנגלית */}
          <Button 
            component={Link} 
            to="/auth" 
            variant="contained" 
            sx={{ 
              backgroundColor: '#8eb652', 
              color: '#ffffff', 
              borderRadius: '12px', 
              textTransform: 'none', 
              fontWeight: 'bold',
              px: 3,
              py: 1,
              '&:hover': { backgroundColor: '#5d9c00' } 
            }}
          >
            Login
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  )
}