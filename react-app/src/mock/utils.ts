
export function decode(url:string) {
    const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
    if (!search) {
      return {}
    }
    let obj:any = {}
    const searchArr = search.split('&')
    searchArr.forEach(v => {
      const index = v.indexOf('=')
      if (index !== -1) {
        const name = v.substring(0, index)
        const val = v.substring(index + 1, v.length)
        obj[name] = val
      }
    })
    return obj
}

export function decodeParam(str:string){
  let newObj = {};
  str.split('&').map(item=>{
    let arr:Array<string> = item.split('=')
    let obj:any = {}
    obj[arr[0]] = arr[1]
    return obj
  }).forEach((item)=>{
    newObj = Object.assign(newObj,item)
  })
  return newObj
}