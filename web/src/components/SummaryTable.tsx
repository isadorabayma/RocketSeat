import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { api } from "../lib/axios"
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning"
import { HabitDay } from "./HabitDay"

const weekLetters = ['D','S','T','Q','Q','S','S']
const summaryDates = generateDatesFromYearBeginning()
const minimumSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

type Summary = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}[]

export function SummaryTable() {
  const [summary, setSummary] = useState<Summary>([])

  useEffect(() => {
    api.get('summary').then(response => {
      setSummary(response.data)
    })
  }, [])
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
        {summary.length > 0 && summaryDates.map(date => {
          const dayInSummary = summary.find(day => {
            return dayjs(date).isSame(day.date, 'day')
          })
          return (
            <HabitDay
              key={date.toString()}
              date={date}
              amount={dayInSummary?.amount}
              defaulfCompleted={dayInSummary?.completed}
            />
          ) 
        })}

        {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_,i) => {
          return (
            <div key={i} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"/>
          )
        })
        
        }
      </div>
    </div>
  )
}