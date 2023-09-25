let res = document.getElementById('res')

let atualValue = Number(res.value)

function addOne(){
   let addOne = atualValue += 1 
   res.value = addOne
    
     
}

function rmOne(){
   let removeOne = atualValue -=1
   res.value= removeOne
}

function clearCounter(){
   res.value = 0
}
   