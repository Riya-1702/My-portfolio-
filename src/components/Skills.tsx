'use client'

import React, { useState, useRef, useCallback } from 'react'
import { Code2, Brain, Database, Cloud, ChevronDown, MousePointer2 } from 'lucide-react'

interface Skill {
  name: string
  icon: React.ReactNode
}

interface SkillCard {
  id: number
  title: string
  skills: Skill[]
  bgGradient: string
  iconColor: string
}

const skillCards: SkillCard[] = [
  {
    id: 1,
    title: 'Programming Languages',
    bgGradient: 'from-white to-gray-50',
    iconColor: 'text-gray-800',
    skills: [
      { name: 'C', icon: <Code2 className="w-5 h-5" /> },
      { name: 'C++', icon: <Code2 className="w-5 h-5" /> },
      { name: 'Python', icon: <Code2 className="w-5 h-5" /> }
    ]
  },
  {
    id: 2,
    title: 'AI / ML',
    bgGradient: 'from-gray-100 to-gray-200',
    iconColor: 'text-gray-700',
    skills: [
      { name: 'Machine Learning', icon: <Brain className="w-5 h-5" /> },
      { name: 'Agent AI', icon: <Brain className="w-5 h-5" /> }
    ]
  },
  {
    id: 3,
    title: 'Databases',
    bgGradient: 'from-gray-50 to-white',
    iconColor: 'text-gray-800',
    skills: [
      { name: 'MySQL', icon: <Database className="w-5 h-5" /> }
    ]
  },
  {
    id: 4,
    title: 'DevOps & Cloud',
    bgGradient: 'from-gray-200 to-gray-300',
    iconColor: 'text-gray-700',
    skills: [
      { name: 'Kubernetes', icon: <Cloud className="w-5 h-5" /> },
      { name: 'Docker', icon: <Cloud className="w-5 h-5" /> },
      { name: 'Jenkins', icon: <Cloud className="w-5 h-5" /> },
      { name: 'AWS', icon: <Cloud className="w-5 h-5" /> }
    ]
  }
]

export default function StackedDeckSkills() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartY = useRef<number>(0)
  const touchEndY = useRef<number>(0)

  const nextCard = useCallback(() => {
    if (isAnimating) return
    
    setIsAnimating(true)
    setCurrentCardIndex((prev) => (prev + 1) % skillCards.length)
    
    setTimeout(() => setIsAnimating(false), 600)
  }, [isAnimating])

  // Touch handlers for mobile - ONLY swipe up moves cards
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndY.current = e.touches[0].clientY
  }

  const handleTouchEnd = () => {
    const deltaY = touchStartY.current - touchEndY.current
    const minSwipeDistance = 50

    // Only move on swipe UP gesture
    if (deltaY > minSwipeDistance) {
      nextCard()
    }
  }

  // Mouse wheel handler for desktop - ONLY scroll down moves cards
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault()
    // Only move on scroll DOWN
    if (e.deltaY > 0) {
      nextCard()
    }
  }, [nextCard])

  // Keyboard handler for accessibility
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      nextCard()
    }
  }, [nextCard])

  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('keydown', handleKeyDown)

    return () => {
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleWheel, handleKeyDown])

  return (
    <div className="flex flex-col items-center">
      {/* Section Heading */}
      <h2 className="text-3xl lg:text-4xl font-light text-slate-800 mb-12 text-center">
        Technologies
      </h2>

      {/* Stacked Deck Container - Increased height */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-2xl mx-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-2xl"
        style={{ height: '650px' }}
        tabIndex={0}
        role="button"
        aria-label={`Skills showcase. Currently showing ${skillCards[currentCardIndex].title}. Press Enter or scroll to see next category.`}
        onClick={nextCard}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {skillCards.map((card, index) => {
          const isActive = index === currentCardIndex
          const isPrevious = index === (currentCardIndex - 1 + skillCards.length) % skillCards.length
          const isNext = index === (currentCardIndex + 1) % skillCards.length
          
          let transform = 'translateY(100%)'
          let opacity = 0
          let zIndex = 0
          let scale = 0.95

          if (isActive) {
            transform = 'translateY(0%)'
            opacity = 1
            zIndex = 30
            scale = 1
          } else if (isPrevious) {
            transform = 'translateY(-100%)'
            opacity = 0
            zIndex = 10
            scale = 0.95
          } else if (isNext) {
            transform = 'translateY(20px)'
            opacity = 0.3
            zIndex = 20
            scale = 0.98
          }

          return (
            <div
              key={card.id}
              className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} rounded-2xl shadow-2xl border-2 border-gray-300 transition-all duration-600 ease-out`}
              style={{
                transform: `${transform} scale(${scale})`,
                opacity,
                zIndex,
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Card Content */}
              <div className="p-10 h-full flex flex-col">
                {/* Header */}
                <div className="text-center mb-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/80 ${card.iconColor} mb-6 shadow-lg border-2 border-gray-200`}>
                    {card.id === 1 && <Code2 className="w-10 h-10" />}
                    {card.id === 2 && <Brain className="w-10 h-10" />}
                    {card.id === 3 && <Database className="w-10 h-10" />}
                    {card.id === 4 && <Cloud className="w-10 h-10" />}
                  </div>
                  <h3 className={`text-3xl font-semibold mb-4 text-gray-800`}>
                    {card.title}
                  </h3>
                  <div className={`w-16 h-1 rounded-full mx-auto bg-gray-400`}></div>
                </div>

                {/* Skills Grid - More space for content */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="grid grid-cols-1 gap-5">
                    {card.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={`flex items-center gap-4 rounded-xl px-6 py-5 shadow-sm border-2 transition-all duration-200 bg-white/60 border-gray-200 hover:bg-white/90 text-gray-800`}
                        style={{
                          animationDelay: isActive ? `${skillIndex * 100}ms` : '0ms'
                        }}
                      >
                        <div className={`${card.iconColor} flex-shrink-0`}>
                          {skill.icon}
                        </div>
                        <span className="font-medium text-lg">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center mt-10">
                  <div className="flex gap-3">
                    {skillCards.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentCardIndex 
                            ? `w-8 bg-gray-600` 
                            : `w-2 bg-gray-300`
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Next Card Hint removed */}
            </div>
          )
        })}
      </div>

      {/* Card Counter removed */}
    </div>
  )
}
