import React from 'react'
import Mission from '../Model/MissionsModel'
import Item from './Item'

interface Props{
  missions:Mission[]
  setChange:((x:any)=>void)
  change:boolean
}
// display all missinos
function ListMissions(props:Props) {
  return (
    <div>
        { props.missions?.map((item) => <Item
         change={props.change}
          setChange={props.setChange}
           key={item._id}
            mission={item}
        /> )}
    </div>
  )
}

export default ListMissions