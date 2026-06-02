
import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import FridgeView from './FridgeView'

// מוצרים ראשוניים שנמצאים בסל הקניות ומחכים שיגררו אותם למקרר
const INITIAL_GROCERIES = [
  { id: 101, name: 'Apple', image: 'https://cdn-icons-png.flaticon.com/512/415/415682.png' },
  { id: 102, name: 'Tomato', image: 'https://cdn-icons-png.flaticon.com/512/1202/1202125.png' },
  { id: 103, name: 'Milk', image: 'https://cdn-icons-png.flaticon.com/512/2674/2674486.png' },
  { id: 104, name: 'Cheese', image: 'https://cdn-icons-png.flaticon.com/512/2200/2200635.png' },
  { id: 105, name: 'Eggs', image: 'https://cdn-icons-png.flaticon.com/512/2836/2836851.png' },
  { id: 106, name: 'Lemon', image: 'https://cdn-icons-png.flaticon.com/512/1911/1911030.png' }
]

export default function FridgeDashboard() {
  // המקרר מתחיל ריק לחלוטין ממוצרים
  const [fridgeItems, setFridgeItems] = useState<Record<string, any[]>>({
    shelf1: [], shelf2: [], dairy: [], crisper: [],
    leftDoor1: [], leftDoor2: [], leftDoor3: [],
    rightDoor1: [], rightDoor2: [], rightDoor3: []
  })

  // רשימת המצרכים הזמינים בסל
  const [groceries, setGroceries] = useState(INITIAL_GROCERIES)

  // פונקציה שמופעלת כשהמשתמש מתחיל לגרור מוצר מסל הקניות
  const handleDragStart = (e: React.DragEvent, item: any) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(item))
  }

  // פונקציה שמטפלת בהנחת המוצר בתוך מדף ספציפי במקרר
  const handleDropItem = (shelfKey: string, droppedItem: any) => {
    // 1. מוסיפים את המוצר למדף המתאים במקרר
    setFridgeItems((prev) => ({
      ...prev,
      [shelfKey]: [...(prev[shelfKey] || []), droppedItem]
    }))

    // 2. מסירים את המוצר מסל הקניות בצד
    setGroceries((prev) => prev.filter((item) => item.id !== droppedItem.id))
  }

  // פונקציה שמסירה מוצר מהמקרר ומחזירה אותו לסל הקניות (בלחיצה)
  const handleRemoveItem = (itemId: number) => {
    let removedItem: any = null

    // מוצאים ומסירים מהמקרר
    setFridgeItems((prev) => {
      const next = { ...prev }
      for (const shelfKey in next) {
        const found = next[shelfKey].find((i) => i.id === itemId)
        if (found) {
          removedItem = found
          next[shelfKey] = next[shelfKey].filter((i) => i.id !== itemId)
        }
      }
      return next
    })

    // מחזירים אותו לסל הקניות כדי שהמשתמש יוכל לגרור שוב
    if (removedItem) {
      setGroceries((prev) => [...prev, removedItem])
    }
  }

  return (
    <Box 
      sx={{ 
        height: 'calc(100vh - 65px)', 
        maxHeight: 'calc(100vh - 65px)',
        background: 'linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%)',
        overflow: 'hidden', // מניעת גלילה של הדף
        display: 'flex',
        p: 3,
        gap: 4,
        boxSizing: 'border-box'
      }}
    >
      
      {/* 🛒 צד שמאל: סל קניות (מצרכים זמינים לגרירה) */}
      <Paper
        elevation={0}
        sx={{
          width: '280px',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e5e7eb',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1f2937' }}>
          Ingredients Shop
        </Typography>
        <Typography variant="body2" sx={{ color: '#6b7280', mb: 1 }}>
          Drag ingredients directly into the fridge compartments:
        </Typography>

        {/* רשימת המצרכים הנגררים */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, overflowY: 'auto', pr: 1 }}>
          {groceries.map((item) => (
            <Box
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              sx={{
                width: '65px',
                height: '65px',
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'grab',
                transition: 'all 0.2s',
                '&:active': { cursor: 'grabbing' },
                '&:hover': {
                  borderColor: '#8eb652',
                  boxShadow: '0 4px 12px rgba(142, 182, 82, 0.15)',
                  transform: 'translateY(-2px)'
                }
              }}
              title={`Drag ${item.name}`}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{ width: '45px', height: '45px', objectFit: 'contain' }}
              />
            </Box>
          ))}

          {groceries.length === 0 && (
            <Typography variant="body2" sx={{ color: '#9ca3af', fontStyle: 'italic', mt: 2, width: '100%', textAlign: 'center' }}>
              Your basket is empty!
            </Typography>
          )}
        </Box>
      </Paper>

      {/* 🧊 צד ימין: המקרר האינטראקטיבי שלך */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <FridgeView 
          items={fridgeItems} 
          onRemoveItem={handleRemoveItem} 
          onDropItem={handleDropItem} 
        />
      </Box>

    </Box>
  )
}