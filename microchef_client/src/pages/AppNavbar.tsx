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

        {/* מרכז: קישורי הניווט (מוסתרים במסכים קטנים מאוד) */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
          
          <Button 
            component={Link} 
            to="/dashboard" 
            color="inherit" 
            sx={{ textTransform: 'none', color: '#4b5563', '&:hover': { color: '#2563eb' } }}
          >
            המקרר שלי
          </Button>
          <Button 
            component={Link} 
            to="/inventory" 
            color="inherit" 
            sx={{ textTransform: 'none', color: '#4b5563', '&:hover': { color: '#2563eb' } }}
          >
            מלאי וסטטיסטיקות
          </Button>
          <Button 
            component={Link} 
            to="/" 
            color="inherit" 
            sx={{ textTransform: 'none', color: '#4b5563', '&:hover': { color: '#2563eb' } }}
          >
            דף הבית
          </Button>
        </Box>

        {/* צד ימין: אזור הפעמון וההתחברות */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          
          {/* אייקון פעמון אמיתי עם Badge של התראות */}
          <IconButton color="inherit" sx={{ color: '#4b5563' }}>
            <Badge variant="dot" color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* כפתור התחברות מעוצב */}
          <Button 
            component={Link} 
            to="/auth" 
            variant="contained" 
            sx={{ 
              backgroundColor: '#2563eb', 
              color: '#ffffff', 
              borderRadius: '12px', 
              textTransform: 'none', 
              fontWeight: 'bold',
              px: 3,
              py: 1,
              '&:hover': { backgroundColor: '#1d4ed8' } 
            }}
          >
            התחברות
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  )
}