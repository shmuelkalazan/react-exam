import { useState ,useEffect} from 'react'
import Mission from './Model/MissionsModel'
import Add from './Components/Add'
import ListMissions from './Components/ListMissions'

function App() {
  // stats 
  const [missions, setMissions] = useState<Mission[]>([])
  const [change,setChange] = useState<boolean>(false)

  const BASE_URL = `https://reactexambackend.onrender.com/missions/8486397`
  // effect to get all missions at the changes like add delete update
  useEffect(() => {
    const getAllMissions = async (): Promise<void> => {
    const res: Response = await fetch(`${BASE_URL}`)
    const data = await res.json();
    setMissions(data)
    console.log(data)
    }
    getAllMissions()
  },[change])
  
  return (
    <div>
      <Add change={change} setChange={setChange}/>
      <ListMissions change={change} setChange={setChange}  missions={missions}/>
    </div>
  )
}

export {
  App
} 
