import Mission from '../Model/MissionsModel'

interface Props{
    mission:Mission
    setChange:((x:any)=>void)
    change:boolean
}

function Item(props:Props) {
   //delete mission
    const deleteMIssion = () => {
        const BASE_URL = `https://reactexambackend.onrender.com/missions/8486397`
            const deletMissionToServer = async (): Promise<void> => {
            try {
                const res: Response = await fetch(`${BASE_URL}/${props.mission._id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                },
                });
                const data = await res.json();
                console.log(data)
                props.setChange(!props.change)

            } catch (err) {
                console.log(`Couldn't proccess your mission`);
            }
            };
            deletMissionToServer()
        };

    //updae mission
    const updateMission = () => {
        const BASE_URL = `https://reactexambackend.onrender.com/missions/8486397`
            const updateMissionToServer = async (): Promise<void> => {
            try {
                await fetch(`${BASE_URL}/progress/${props.mission._id}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                });
                props.setChange(!props.change)
            } catch (err) {
                console.log(`Couldn't proccess your mission`);
            }
            };
            updateMissionToServer()
        }
        
  // display the missions and buttons
  return (
    <div className={`item ${props.mission.status}`}>
        <div className={`in_item`}>
            <p>name : {props.mission.name}</p>
            <p>status : {props.mission.status}</p>
            <p>priority : {props.mission.priority}</p>
            <p>description : {props.mission.description}</p>
        </div>
        <div className='buts'>
            <button onClick={deleteMIssion} className='btn btn_del'>delete</button>
            {props.mission.status != "Completed" && <button onClick={updateMission} className='btn btn_prog'>progress</button>
        }
        </div>
    </div>
  )
}

export default Item
