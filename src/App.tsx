import { MouseEvent, MouseEventHandler, useCallback, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function GraphNode() {
  const nnn = useRef<HTMLDivElement>(null)
  const handleMouseDown = useCallback((e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (!nnn.current) return
    let { x, y } = e.nativeEvent
    const left = Number(nnn.current.style.left.replaceAll('px', ''))
    window.onmousemove = (e: globalThis.MouseEvent) => {
      if (!nnn.current) return
      const xx = e.x - x
      nnn.current.style.left = left + xx + 'px'
    }
    window.onmouseup = () => {
      window.onmousemove = null
    }
  },[nnn])
  const handleMouseDownl = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (!nnn.current) return
    let { x, y } = e.nativeEvent
    const { width } = nnn.current.getBoundingClientRect()
    const left = Number(nnn.current.style.left.replaceAll('px', ''))

    window.onmousemove = (e: globalThis.MouseEvent) => {
      if (!nnn.current) return

      const xx = e.x - x
      nnn.current.style.left = left + xx + 'px'
      nnn.current.style.width = width - xx + 'px'
    }
    window.onmouseup = () => {
      window.onmousemove = null
    }
  }
  const handleMouseDownr = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (!nnn.current) return
    let { x, y } = e.nativeEvent
    const { width } = nnn.current.getBoundingClientRect()

    window.onmousemove = (e: globalThis.MouseEvent) => {
      if (!nnn.current) return

      const xx = e.x - x
      nnn.current.style.width = width + xx + 'px'
    }
    window.onmouseup = () => {
      window.onmousemove = null
    }
  }
  return <>
    <div className='nnn' style={{ width: 400,left: 30 }} ref={nnn}>
      <div className='l' onMouseDown={(e) => handleMouseDownl(e)}></div>
      <div className='r' onMouseDown={(e) => handleMouseDownr(e)}></div>
      <div className='c' onMouseDown={(e) => handleMouseDown(e)}>这是文字描述</div>
    </div>
  </>
}


function App() {

  return (
    <div className="App">
      <div className='left'></div>
      <div className='right'>
        <div className='node'>
          <div className='title'>
            {Array.from(new Array(31)).map((_, item) => <div className='tn' key={item}>{item + 1}</div>)}
          </div>
          <div className='content-box'>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
            <div className='nn'>
              <GraphNode />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App