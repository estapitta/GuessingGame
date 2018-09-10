const list = document.getElementById('list')
const status = document.getElementById('status')
const input = document.getElementById('input')
const submit = document.getElementById('submit')
const again = document.getElementById('again')
const hint = document.getElementById('hint')
let winningNumber = Math.floor((Math.random() * 100) + 1);
let counter = 1;



submit.addEventListener('click',function(){
    
    let submitValue = Number(input.value)
   
    if(counter >= 5){
        status.innerHTML = "You lose"
    } else {
        input.value = ''
        if(submitValue === winningNumber){
            status.innerHTML = "You win!"
        } else {
            let entry = document.createElement('li')
            entry.appendChild(document.createTextNode(submitValue));
            list.appendChild(entry);
            status.innerHTML = "Try again!"
        }
    }
    counter+=1;
})

again.addEventListener('click',function(){
    counter = 1;
    status.innerHTML = ""
    input.value = ''
    winningNumber =  Math.floor((Math.random() * 100) + 1);
    while( list.firstChild ){
        list.removeChild( list.firstChild );
      }
})

hint.addEventListener('click',function(){
 let numOne = Math.floor((Math.random() * 100) + 1);
 let numTwo = Math.floor((Math.random() * 100) + 1);
 status.innerHTML = `Hint: ${numOne} ${numTwo} ${winningNumber}`
})