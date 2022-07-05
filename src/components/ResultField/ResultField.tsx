import React from 'react'

import { numberWithSpaces } from '../../app/helpers'
import { useAppSelector } from '../../app/hooks'
import './style.css'

const ResultField = () => {
  const displayedValue = useAppSelector(
    (state) => state.calcSlice.displayedValue
  )

  return (
    <section className='result-field'>
      <input
        className='result-field__value'
        readOnly
        value={displayedValue === '' ? '0' : numberWithSpaces(displayedValue)}
      />
    </section>
  )
}

export default ResultField
