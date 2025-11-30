'use client'

import { useEffect, useState } from 'react'

export default function WinterRushCountdown() {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    setMounted(true)
    const targetDate = new Date('2025-12-31T23:59:59').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        setIsExpired(true)
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted || isExpired) {
    return null
  }

  return (
    <div className="bg-black text-white py-3 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest mb-2">
          10% OFF WINTER RUSH ORDERS — ENDS DEC 31
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tabular-nums">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="text-[9px] uppercase tracking-wide">DAYS</span>
          </div>
          <span className="text-base opacity-50">:</span>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-[9px] uppercase tracking-wide">HOURS</span>
          </div>
          <span className="text-base opacity-50">:</span>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-[9px] uppercase tracking-wide">MINS</span>
          </div>
          <span className="text-base opacity-50">:</span>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-[9px] uppercase tracking-wide">SECS</span>
          </div>
        </div>
      </div>
    </div>
  )
}
