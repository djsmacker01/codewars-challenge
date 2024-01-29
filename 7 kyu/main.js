function accum(s) {
// 	 Split the string
  
  return s.split('').map((item, index)=>
    item.toUpperCase() + item.toLowerCase().repeat(index)).join('-')
  
  
  
}