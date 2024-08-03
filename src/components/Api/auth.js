
// save a user to database
export const savedUser = user => {
    const currentUser = {
      email: user.email,
    }
  
    fetch(`http://localhost:5000/users/${user?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }


  // save a user by host
export const becomeHost = email => {
  const currentUser = {
    role:'host'
  }

 return fetch(`http://localhost:5000/users/${email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  })
    .then(res => res.json())
    
}

// get user roal

export const getUserRole=email=>{
  fetch(`http://localhost:5000/users/${email}`)
  .then(res=>res.json())
  .then(data=>{
    const role = data.user
    return role
  })
}

export const getRole=async email=>{
  const response = await fetch(`http://localhost:5000/users/${email}`)
  const user = await response.json();
  return user?.role
}