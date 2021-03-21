let theme = localStorage.getItem('theme')

if (theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName("theme-dot")

for(var i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click',function(){
        let mode = this.dataset.mode
        console.log('Option clicked',mode)
        setTheme(mode)
    })
}
function setTheme(mode){
    if(mode == 'blue'){
        document.getElementById('theme-style').href = "main.css"
    }
    if(mode == 'pink'){
        document.getElementById('theme-style').href = "pink.css"
    }
    if (mode == 'green'){
        document.getElementById('theme-style').href="green.css"
    }
    if (mode == 'purple'){
        document.getElementById('theme-style').href="purple.css"
    }
    if (mode == 'skyblue') {
        document.getElementById('theme-style').href="skyblue.css"
    }
    if (mode == 'neongreen'){
        document.getElementById('theme-style').href="neongreen.css"
    }
    if (mode == 'yellow'){
        document.getElementById('theme-style').href="yellow.css"
    }
    if (mode == 'orange') {
        document.getElementById('theme-style').href="orange.css"
    }
    if (mode == 'black') {
        document.getElementById('theme-style').href="black.css"
    }
    localStorage.setItem('theme',mode)
}
