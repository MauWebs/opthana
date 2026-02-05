import { useEffect, useRef } from "react";

export default function DotPattern({ }: { height?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!

    const DPR = window.devicePixelRatio || 1
    const gap = 3
    const size = 1
    const height = 27
    const changeRate = 0.02
    const intervalMs = 200

    let cols = 0
    let rows = 0
    let grid: boolean[] = []

    const resize = () => {
      const width = window.innerWidth
      cols = Math.floor(width / gap)
      rows = Math.floor(height / gap)

      canvas.width = width * DPR
      canvas.height = height * DPR
      canvas.style.width = "100%"
      canvas.style.height = `${height}px`
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)

      grid = Array(cols * rows)
        .fill(false)
        .map(() => Math.random() > 0.6)
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(255, 255, 255, 0.19)"

      for (let i = 0; i < grid.length; i++) {
        if (Math.random() < changeRate) {
          grid[i] = Math.random() > 0.6
        }

        if (grid[i]) {
          const x = (i % cols) * gap
          const y = Math.floor(i / cols) * gap
          ctx.fillRect(x, y, size, size)
        }
      }
    }

    resize()
    draw()

    const interval = setInterval(draw, intervalMs)
    window.addEventListener("resize", resize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} />
}