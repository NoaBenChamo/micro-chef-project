import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const IMG_OPEN = "https://safetmind-user-files.s3.amazonaws.com/file-45537fe8016fefc/e26e706f-60c9-49af-80bb-53ed5e986b40.png"
const IMG_CLOSED = "https://safetmind-user-files.s3.amazonaws.com/file-6faba496f4bb901/86d1ddd5-f035-4d31-8f07-922f8ad9c901.png"

const SHELF_ZONES: Record<string, any> = {
  shelf1:       { top: "6%",  left: "22%", width: "56%", height: "22%", label: "Shelf 1 – Fruits & Berries" },
  shelf2:       { top: "30%", left: "22%", width: "56%", height: "22%", label: "Shelf 2 – Vegetables" },
  dairy:        { top: "54%", left: "22%", width: "56%", height: "16%", label: "Dairy & Eggs" },
  crisper:      { top: "72%", left: "22%", width: "56%", height: "20%", label: "Crisper Drawer" },
  leftDoor1:    { top: "6%",  left: "1%",  width: "19%", height: "27%", label: "Left Door Shelf 1" },
  leftDoor2:    { top: "35%", left: "1%",  width: "19%", height: "27%", label: "Left Door Shelf 2" },
  leftDoor3:    { top: "64%", left: "1%",  width: "19%", height: "27%", label: "Left Door Shelf 3" },
  rightDoor1:   { top: "6%",  left: "80%", width: "19%", height: "27%", label: "Right Door Shelf 1" },
  rightDoor2:   { top: "35%", left: "80%", width: "19%", height: "27%", label: "Right Door Shelf 2" },
  rightDoor3:   { top: "64%", left: "80%", width: "19%", height: "27%", label: "Right Door Shelf 3" },
}

// קומפוננטת מוצר בודד בתוך המקרר
const FridgeItem = ({ item, onRemove }: { item: any, onRemove: (id: number) => void }) => (
  <Box
    title={`${item.name} (Click to remove)`}
    onClick={() => onRemove(item.id)}
    sx={{
      display: 'inline-flex',
      flexShrink: 0,
      cursor: 'pointer',
      transition: 'transform 0.1s',
      '&:hover': { transform: 'scale(1.1)' }
    }}
  >
    <Box
      component="img"
      src={item.image}
      alt={item.name}
      sx={{ height: '45px', width: '45px', objectFit: 'contain' }}
    />
  </Box>
)

// קומפוננטת מדף שמקשיבה לגרירה
const ShelfZone = ({ zoneKey, zone, items, onRemove, onDropItem }: any) => {
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault() // חובה כדי לאפשר drop
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const itemData = e.dataTransfer.getData('text/plain')
    if (itemData) {
      const draggedItem = JSON.parse(itemData)
      onDropItem(zoneKey, draggedItem)
    }
  }

  return (
    <Box
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      sx={{
        position: 'absolute',
        top: zone.top,
        left: zone.left,
        width: zone.width,
        height: zone.height,
        overflow: 'hidden',
        borderRadius: '8px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '6px',
        padding: '6px',
        boxSizing: 'border-box',
        transition: 'background-color 0.2s',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          outline: '2px dashed #8eb652' // סימון דק ויפה שהמדף מוכן לקלוט מוצר
        }
      }}
      title={zone.label}
    >
      {(items || []).map((item: any) => (
        <FridgeItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </Box>
  )
}

interface FridgeViewProps {
  items: Record<string, any[]>
  onRemoveItem: (id: number) => void
  onDropItem: (shelfKey: string, item: any) => void
}

export default function FridgeView({ items, onRemoveItem, onDropItem }: FridgeViewProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: '100%' }}>
      
      <Button
        variant="contained"
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          padding: '8px 24px',
          borderRadius: '20px',
          backgroundColor: isOpen ? '#e07b39' : '#8eb652',
          color: 'white',
          fontWeight: 'bold',
          textTransform: 'none',
          '&:hover': { backgroundColor: isOpen ? '#c25e1f' : '#5d9c00' }
        }}
      >
        {isOpen ? '🚪 Close Refrigerator' : '🚪 Open Refrigerator'}
      </Button>

      {/* מיכל תמונת המקרר והמדפים */}
      <Box sx={{ position: 'relative', width: '100%', maxWidth: '650px', userSelect: 'none' }}>
        <Box
          component="img"
          src={isOpen ? IMG_OPEN : IMG_CLOSED}
          alt="Fridge"
          draggable={false}
          sx={{ width: '100%', display: 'block' }}
        />

        {isOpen &&
          Object.entries(SHELF_ZONES).map(([key, zone]) => (
            <ShelfZone
              key={key}
              zoneKey={key}
              zone={zone}
              items={items[key]}
              onRemove={onRemoveItem}
              onDropItem={onDropItem}
            />
          ))}
      </Box>
    </Box>
  )
}