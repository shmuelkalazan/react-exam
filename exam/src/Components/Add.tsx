import React, { HtmlHTMLAttributes, useRef, useState } from 'react'
interface Props{
    setChange:((x:any)=>void)
    change:boolean
}
function Add(props:Props) {
    const name = useRef<HTMLInputElement | null>(null)
    const status = useRef<HTMLSelectElement>(null)
    const priority = useRef<HTMLSelectElement>(null)
    const description = useRef<HTMLInputElement | null>(null)

    const addMission = () => {
    const BASE_URL = `https://reactexambackend.onrender.com/missions/8486397`
        const addMissionToServer = async (): Promise<void> => {
        try {
            const res: Response = await fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name: name.current?.value || '',
                status: status.current?.value || 'Pending',
                priority: priority.current?.value || 'Low',
                description: description.current?.value || ''
            }),

            
            });
            const data = await res.json();
            console.log(data)
            props.setChange(!props.change)
        } catch (err) {
            console.log(`Couldn't proccess your mission`);
        }
        };
        {name.current?.value && description.current?.value && addMissionToServer() }
    };
    
    return (
    <div className='add'>
        <input className='card' ref={name}  type="text" placeholder='your name'/>
        <select className='card' ref={status} name="status" id="">
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
        </select>
        <select className='card' ref={priority} name="priority" id="">
            <option value="Low">Low</option>
            <option value="Middle">Middle</option>
            <option value="High">High</option>
        </select>
        <input className='card' ref={description}  type="text" placeholder='description:' />
        <button className='card btn_add' onClick={addMission}>add mission</button>
    </div>
  )
}

export default Add