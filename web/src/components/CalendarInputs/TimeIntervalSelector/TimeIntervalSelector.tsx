/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dispatch, SetStateAction } from 'react'

import { motion } from 'framer-motion'

import { TimeIncrement } from '../CalendarSelectionInput/CalendarSelectionInput'

interface TimeIntervalSelectorProps {
  timeIncrement: number
  setTimeIncrement: Dispatch<SetStateAction<TimeIncrement>>
}

const TimeIntervalSelector = ({
  timeIncrement,
  setTimeIncrement,
}: TimeIntervalSelectorProps) => {
  const animationXPos =
    timeIncrement === 60 ? 0 : timeIncrement === 30 ? 37.5 : 75

  return (
    <div className="relative w-40" aria-label="time increment selector">
      <p className="mb-1 text-xs">Time Increment:</p>
      <motion.div
        className="border-primary-700 absolute bottom-0 left-0 h-10 w-10 rounded border"
        animate={{ x: animationXPos }}
        transition={{ ease: 'easeInOut', duration: 0.25 }}
      />
      <div className="relative z-10 flex w-full flex-row justify-between text-sm">
        <span
          onClick={() => setTimeIncrement(60)}
          className="time-increment-selector"
          aria-label="60 minute increment"
          role="time-increment-selector"
        >
          60
        </span>
        <span
          onClick={() => setTimeIncrement(30)}
          className="time-increment-selector"
          aria-label="30 minute increment"
          role="time-increment-selector"
        >
          30
        </span>
        <span
          onClick={() => setTimeIncrement(15)}
          className="time-increment-selector"
          aria-label="15 minute increment"
          role="time-increment-selector"
        >
          15
        </span>
      </div>
    </div>
  )
}

export default TimeIntervalSelector
