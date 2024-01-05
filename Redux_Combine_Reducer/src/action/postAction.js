export const REQT = () => ({
  type: "REQT",
  
})
export const SUCC = (payload) => ({
    type: "SUCC",
    payload : payload
    
  })

  export const EROR = (payload) => ({
    type: "EROR",
    payload : payload
    
  })