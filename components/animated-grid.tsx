"use client"

import { useEffect, useRef } from "react"

export function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const spacing = 60
      const cols = Math.ceil(canvas.width / spacing) + 1
      const rows = Math.ceil(canvas.height / spacing) + 1

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing
          const y = j * spacing
          const dist = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) +
              Math.pow(y - canvas.height / 2, 2)
          )
          const wave = Math.sin(dist * 0.005 - time * 0.8) * 0.5 + 0.5
          const opacity = wave * 0.08
          ctx.beginPath()
          ctx.arc(x, y, 1, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0, 123, 255, ${opacity})`
          ctx.fill()
        }
      }

      // Draw subtle grid lines
      ctx.strokeStyle = "rgba(0, 123, 255, 0.03)"
      ctx.lineWidth = 0.5
      for (let i = 0; i < cols; i++) {
        ctx.beginPath()
        ctx.moveTo(i * spacing, 0)
        ctx.lineTo(i * spacing, canvas.height)
        ctx.stroke()
      }
      for (let j = 0; j < rows; j++) {
        ctx.beginPath()
        ctx.moveTo(0, j * spacing)
        ctx.lineTo(canvas.width, j * spacing)
        ctx.stroke()
      }

      time += 0.016
      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}
