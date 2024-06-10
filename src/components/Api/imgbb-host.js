

 export const imgbbUplodeImage=async image=>{
    const formData= new FormData();
    formData.append('image', image);

   const response=await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb}`,{
        method:"POST",
        body:formData
    })

    const data = await response.json();
    return data
    
}