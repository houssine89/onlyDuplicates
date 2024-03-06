function duplicates(s){
  let arr = s.split('');
  const r = [];
  for(let i =0; i<s.length; i++){
    for(let j =0; j<s.length; j++){
      if(arr[i] == arr[j] && i!==j){
        r.push(arr[i])
        break
      }
    } 
  }
return r}
  console.log(duplicates('abccdefee'))