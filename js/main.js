let editor = document.getElementById('editor');
document.querySelector('body').addEventListener("keyup", (event) =>{
    if(event.keyCode == 13){
        let blackWord = document.querySelectorAll("#editor > span");
        blackWord.forEach(element => {
            element.style.width = element.offsetWidth+"px";
            element.style.justifyContent = "flex-start";
        });
        let insideWord = document.querySelectorAll("#editor > span > span");
        insideWord.forEach(word => {
            word.style.padding = "0px 0px 0px "+word.offsetWidth+"px";
        });
        setTimeout(() => {
            editor.innerHTML = '<span class="colored red"><span>Painted</span></span> <span class="colored blue"><span>text</span></span> <span class="colored yellow"><span>understood</span></span> <span class="colored softblue"><span>by</span></span> <span class="colored blue"><span>computer</span></span>';
            let coloredWord = document.querySelectorAll("#editor > .colored");
            coloredWord.forEach(element => {
                element.style.width = element.offsetWidth+"px";
                element.style.justifyContent = "flex-end";
            });
            let insideWord = document.querySelectorAll("#editor > span > span");
            insideWord.forEach(word => {
                word.style.transition = "none";
                word.style.padding = "0px "+word.offsetWidth+"px 0px 0px ";
            });
            setTimeout(() => {
                insideWord.forEach(word => {
                    word.style.transition = "ease .5s";
                    word.style.padding = "0px 0px 0px 0px";
                });
            }, 10);
            setTimeout(() => {
                coloredWord.forEach(element => {
                    element.style.width = "initial";
                });
            }, 500);
        }, 500);
    }
    
});
