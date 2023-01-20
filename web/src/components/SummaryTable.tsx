import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning"
import { HabitDay } from "./HabitDay"

const weekLetters = ['D','S','T','Q','Q','S','S']
const summaryDates = generateDatesFromYearBeginning()

export function SummaryTable() {
  return(
    <div className="w-full max-w-3xl mx-auto flex items-center gap-3">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekLetters.map((dayLetter, i) => {
            return (
              <div 
                key={`${dayLetter}-${i}`} 
                className="text-zinc-400 text-xl w-10 h-10 font-bold flex items-center justify-center"
              >
                {dayLetter}
              </div>
            )
          })
        }
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map(date => {
          return <HabitDay key={date.toString()} />
        })}
      </div>
    </div>
  )
}