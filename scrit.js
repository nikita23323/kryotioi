let knopka = document.querySelector ('.knopka')
let phone = document.querySelector ('.phone')

let percent = 0

let balance  = document.querySelector ('.balance-text')


knopka.addEventListener ('click', function click (){
    phone.style.background = `url(img/bg.jpg)`
    phone.style.filter = `brightness(0)`
    error.textContent =  ''

   let int =  setInterval (function (){ 
        phone.style.filter = `brightness(${percent}%)`
        percent++
        if (percent == 100){
            clearInterval(int)
        }
    },50)




})



let tell = document.querySelector ('.tell')


tell.addEventListener ('click', function click (){
    if (percent >= 100) {
        tell.style.color =  'gray'   
    }

    else if (percent == 0) {
        tell.style.color =  'blue'
        
    }

})
let error = document.querySelector ('.error')
phone.addEventListener ('click', function click (){
error.textContent = "вімкніть Телефон"
setTimeout(() => {
    error.textContent =  ''  
}, 2000);

if (percent >= 1) {
    
  error.textContent =  ''
}

}) 
let password = document.querySelector ('.password')
let btn1 = document.querySelector ('.btn-1')
 let count = 0 
btn1.addEventListener ('click',function click (){

    
  if  (password.value == '') {
    return
  }

  
    count ++ 



 if (password.value == 1111){
    password.remove ()
    // alert('you right')
    btn1.remove()
    
 }

 else if (password.value != 1111){
    // alert('error')
password.value = ''

 }
 if (count == 5){
    btn1.style.display = 'none'
    setTimeout(function(){
    btn1.style.display = 'block'
    count = 0
        
    }, 3000)

    }
})



let btnMusic = document.querySelector (".music")
let audoio = document.querySelector (".audoio")

let audio = false

btnMusic.addEventListener ('click',function click(){


    if(audio == true) {
        audoio.pause()
        audio = false

    }

    else {
        audoio.play()
        audio = true

    }


})
let text2 = false
let btnMess = document.querySelector (".messend")
let text1 = document.querySelector (".text-1")
let sms = document.querySelector (".sms")

btnMess.addEventListener ('click',function click(){

if (text2 == true) {
    text1.style.display = 'none'
    text2 = false
}
else {
    text1.style.display = 'flex'
    text2 = true
}


})


text1.addEventListener ('keyup',function click(event){
    console.log (event)
    if (event.key == 'Enter') {
        console.log(text1.value)
       
        if ( text1.value.length < 2  )  {
            text1.value=''
           return
        }

        let priceSms = (text1.value.length / 5 * 2)

        if (balance.textContent - priceSms < 0) {
            alert('not enought money')
            return

        }

        
        let textDisplay = document.createElement ('h1')
        textDisplay.textContent =  text1.value 
        textDisplay.classList.add('display-text')
        let opacity = 1

           
        balance.textContent = balance.textContent - priceSms

       

            

        
        textDisplay .addEventListener ('click',function click(){

            textDisplay.style.opacity = '0'
            


            setTimeout(function () {
            textDisplay.remove()

            }, 2000)






        })   
        
        
        sms.append(textDisplay)
        text1.value = ''
        
    }
})

