'use client'

import { useEffect } from 'react'
import HomePage from '../page' // your main UI

export default function BridePage() {
  useEffect(() => {
    localStorage.setItem('guestSide', 'bride')
  }, [])

  return <HomePage />
}