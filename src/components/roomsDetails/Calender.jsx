import { DateRange } from 'react-date-range'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DatePicker = ({value, handleSelect}) => {
  return (
    <DateRange
    ranges={[value]}
        onChange={handleSelect}
      rangeColors={['#F43F6E']}
      date={new Date()}
      direction='vertical'
      showDateDisplay={false}
      minDate={new Date()}
    />
  )
}

export default DatePicker