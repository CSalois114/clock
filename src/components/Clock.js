import React, {useState, useEffect} from 'react'

export default function Clock() {
  const [date, setDate] = useState(new Date)

  useEffect(() => {
    const updateDate = setInterval(() => {
      setDate(date => date = new Date)
    }, 1000 )

    return () => clearInterval(updateDate)
  }, [])

  const colonSpacer = <span className="break">:</span>
  const addSpacerZero = time => time < 10 ? `0${time}` : time
  

  return (
    <div id="clock">
      <span id="hours" className='value'>
        {addSpacerZero(date.getHours() % 12)} 
      </span>

      {colonSpacer}

      <span id="minutes" className='value'>
        {addSpacerZero(date.getMinutes())}
      </span>

      {colonSpacer}

      <span id="seconds" className='value'>
          {addSpacerZero(date.getSeconds())}
      </span>

      <span id="meridiem" className='value'>
        {(date.getHours() >= 12 ? " PM" : " AM")}
      </span>
    </div>
  )
}