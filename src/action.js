export const nextquestion = () => ({
    type:"incrementquest"
   
})

export const previousquestion = () => ({
    
      type:"decrementquest"
    
})


export const resetquiz = () => ({
    
    type:"reset"
  
})

export const setans = (ans) => ({
    
    type:"storeans",
    payload: ans,
  
})



