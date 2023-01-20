const weekLetters = ['D','S','T','Q','Q','S','S']

export function SumaryTable() {
  return(
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <div className="flex flex-col gap-2">
        {
          weekLetters.map(dayLetter => {
            return (
              <div className="w-10 h-10 border border-violet-500 flex items-center justify-center">{dayLetter}</div>
            )
          })
        }
      </div>
      <div className="flex flex-col gap-2">
        {
          weekLetters.map(dayLetter => {
            return (
              <div className="w-full h-10 border border-violet-500 flex items-center justify-center"></div>
            )
          })
        }
      </div>
    </div>
  )
}