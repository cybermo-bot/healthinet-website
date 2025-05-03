'use client'
import { useEffect } from 'react'

export default function PainMap({ visible, onClose, onSelect }) {
  useEffect(() => {
    if (!visible) return

    const handleClick = (e) => {
      const region = e.target.id
      if (region) {
        onSelect(region)
        onClose()
      }
    }

    const svg = document.getElementById('pain-map')
    if (svg) svg.addEventListener('click', handleClick)

    return () => {
      if (svg) svg.removeEventListener('click', handleClick)
    }
  }, [visible, onClose, onSelect])

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 shadow-lg w-[320px] max-h-[500px] overflow-y-auto">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Click the area where you feel pain</h2>
          <button className="text-red-500 text-xl font-bold" onClick={onClose}>×</button>
        </div>
        <img
        id="pain-map"
        src="/skeleton-body.svg"
        alt="Body Pain Map"
        className="w-full h-auto"
        />
      </div>
    </div>
  )
}
