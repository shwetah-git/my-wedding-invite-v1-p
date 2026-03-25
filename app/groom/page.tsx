'use client'

import { useEffect } from 'react'
import HomePage from '../page'

export default function GroomPage() {
  useEffect(() => {
    localStorage.setItem('guestSide', 'groom')
  }, [])

  return <HomePage />
}