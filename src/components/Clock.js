import React, {useState, useEffect} from 'react'

export default function Clock() {
  const [date, setDate] = useState(new Date)

  useEffect(() => {
    const updateDate = setInterval(() => {
      setDate(date => date = new Date)
    }, 1000 )

    return () => clearInterval(updateDate)
  }, [])

  const spacer = <span className="spacer">:</span>

  return (
    <div id="clock">
      <span id="hours" className='value'>
        {date.getHours() % 12} 
      </span>

      {spacer}

      <span id="minutes" className='value'>
        {date.getMinutes()}
      </span>

      {spacer}

      <span id="seconds" className='value'>
          {date.getSeconds()}
      </span>

      <span id="meridiem" className='value'>
        {(date.getHours() >= 12 ? " PM" : " AM")}
      </span>
    </div>
  )
}