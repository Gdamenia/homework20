let ricxvi = document.querySelector('.java')
let text = document.querySelector('h5')
let pic = document.querySelector('.absolute')

async function getData(){
    text.innerHTML = 'Loading... please wait(gtxovt)'
    pic.setAttribute('disabled' , true)
    pic.classList.add('spin')
    try{
        let res = await fetch('https://api.adviceslip.com/advice')
        let data = await res.json()
        pic.removeAttribute('disabled')
        ricxvi.innerHTML = data.slip.id
        text.innerHTML = data.slip.advice
        
    } catch(error){
        console.error(error)
    }finally{
        pic.classList.remove('spin')
    }

}


pic.addEventListener('click' , () =>{
    getData()
})
