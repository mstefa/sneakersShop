
export enum METHODS {
  get = "get",
  write = "white",
  remove = "remove",
}

export async function LocalPersistence(key: string,method: METHODS, value?: any){
  if(!key){
    return false
  }

  if(method === METHODS.get && value && !key){
    return false
  }

  if(method === METHODS.remove && value && !key){
    return false
  }

  if(method === METHODS.write && !value && !key){
    return false
  }

  if(method === METHODS.get && key){
    const data = await JSON.parse(localStorage.getItem(key))
    if(data){
      return data
    }else{
      return false
    }
  }

  if(method === METHODS.write && value && key){
    localStorage.setItem(key, JSON.stringify(value))
    const dataSave = JSON.parse(localStorage.getItem(key)) // Requiere investigación
    if(dataSave){
      return true
    }else{
      return false
    }
  }

  if(method === METHODS.remove && key){
    localStorage.removeItem(key)
    const dataSave = JSON.parse(localStorage.getItem(key))
    if(!dataSave){
      return true
    }else{
      return false
    }
  }

}