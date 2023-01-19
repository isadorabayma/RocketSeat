import { Habit } from "./components/Habit"
  
function App() {
  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={10}/>
      <Habit completed={13}/>
      <Habit completed={453}/>
    </div>
  )
}

export default App
