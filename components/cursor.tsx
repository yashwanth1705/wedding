'use client'

import { useEffect, useState, useRef } from 'react'

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const [isHovering, setIsHovering] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const cursor = cursorRef.current
        if (!cursor) return

        const moveCursor = (e: MouseEvent) => {
            cursor.style.left = `${e.clientX}px`
            cursor.style.top = `${e.clientY}px`
            setIsVisible(true)
        }

        const handleMouseEnter = () => setIsHovering(true)
        const handleMouseLeave = () => setIsHovering(false)

        // Track mouse position
        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseout', () => setIsVisible(false))

        // Add hover detection to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]')
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter)
            el.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter)
                el.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    return (
        <div
            ref={cursorRef}
            className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white mix-blend-difference transition-all duration-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
                } ${isHovering ? 'w-16 h-16 bg-white/20' : 'w-8 h-8'
                }`}
        />
    )
}
