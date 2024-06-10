
// addroom post data api
export const addRoomData=async roomData=>{

    const response = await fetch(`http://localhost:5000/rooms`,{
        method: "POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(roomData)
    })
    
    const data= await response.json();
    return data
}

// get api room data 
export const getRoomData=async ()=>{

    const response = await fetch(`http://localhost:5000/rooms`)
    
    const data= await response.json();
    return data
}



