function duplicates(s){
  let arr = s.split('');
  const r = [];
  for(let i =0; i<s.length; i++){
      if(s.indexOf(arr[i]) !== s.lastIndexOf(arr[i])){
        r.push(arr[i])
    
      
    //break;
    }
  } 
  return r.join("")

}
console.log(duplicates('abccdefee'))
