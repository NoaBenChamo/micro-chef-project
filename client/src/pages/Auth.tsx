import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [role, setRole] = useState('adult')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isLogin) {
      console.log('Logging in with credentials...')
    } else {
      console.log('Creating account with role:', role)
    }
  }

  return (
    <Box 
      sx={{ 
        height: 'calc(100vh - 65px)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%)',
        px: 2
      }}
    >
      <Paper 
        elevation={0}
        component="form"
        onSubmit={handleSubmit}
        sx={{ 
          p: { xs: 4, sm: 6 }, 
          width: '100%', 
          maxWidth: '440px', 
          borderRadius: '24px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 10px 25px rgba(0,0,0,0.02)',
          textAlign: 'center',
          backgroundColor: '#ffffff'
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ fontWeight: 'bold', color: '#1f2937', mb: 1 }}
        >
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </Typography>

        <Typography variant="body2" sx={{ color: '#6b7280', mb: 4 }}>
          {isLogin ? 'Please enter your details to sign in' : 'Join MicroChef and stop wasting food'}
        </Typography>

        <Stack spacing={2.5}>
          
          {/* שדה שם מלא - מוצג רק ב-Sign Up */}
          {!isLogin && (
            <TextField 
              label="Full Name" 
              variant="outlined" 
              fullWidth 
              required
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
            />
          )}

          {!isLogin && (
            <FormControl component="fieldset" sx={{ textAlign: 'left', width: '100%', px: 0.5 }}>
              <FormLabel component="legend" sx={{ color: '#4b5563', fontSize: '0.85rem', fontWeight: 500, mb: 0.5 }}>
                Account Type
              </FormLabel>
              <RadioGroup
                row
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <FormControlLabel 
                  value="adult" 
                  control={<Radio sx={{ color: '#8eb652', '&.Mui-checked': { color: '#5d9c00' } }} />} 
                  label="Adult (Full Access)" 
                  sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.9rem', color: '#374151' } }}
                />
                <FormControlLabel 
                  value="child" 
                  control={<Radio sx={{ color: '#8eb652', '&.Mui-checked': { color: '#5d9c00' } }} />} 
                  label="Child (Safe Mode)" 
                  sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.9rem', color: '#374151' } }}
                />
              </RadioGroup>
            </FormControl>
          )}

          <TextField 
            label="Email Address" 
            type="email" 
            variant="outlined" 
            fullWidth 
            required
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
          />

          <TextField 
            label="Password" 
            type="password" 
            variant="outlined" 
            fullWidth 
            required
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
          />

          <Button 
            type="submit" 
            variant="contained" 
            size="large"
            sx={{ 
              backgroundColor: '#8eb652', 
              color: '#ffffff',
              fontWeight: 'bold',
              py: 1.5,
              borderRadius: '12px',
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': { backgroundColor: '#5d9c00' },
              mt: 1
            }}
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </Button>

          <Typography variant="body2" sx={{ color: '#4b5563', pt: 1 }}>
            {isLogin ? "New to MicroChef? " : "Already have an account? "}
            <Box 
              component="span" 
              onClick={() => setIsLogin(!isLogin)}
              sx={{ 
                color: '#5d9c00', 
                fontWeight: 'bold', 
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' } 
              }}
            >
              {isLogin ? 'Create an account' : 'Sign In'}
            </Box>
          </Typography>
          
        </Stack>
      </Paper>
    </Box>
  )
}