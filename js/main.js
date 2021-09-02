let editor = document.getElementById('editor');
document.querySelector('body').addEventListener("keyup", (event) =>{
    if(event.keyCode == 13){
        let blackWord = document.querySelectorAll("#editor > *");
        blackWord.forEach(element => {
            element.style.filter = "blur(90px)";
        });
        setTimeout(() => {
            editor.innerHTML = '<span class="colored red">Painted</span> <span class="colored blue">text</span> <span class="colored yellow">understood</span> <span class="colored softblue">by</span> <span class="colored blue">computer</span>';
            let coloredWord = document.querySelectorAll("#editor > .colored");
            coloredWord.forEach(element => {
            element.style.filter = "blur(90px)";
            setTimeout(() => {
                element.style.filter = "blur(0px)";
                editor.focusout()
            }, 50);
        });
        }, 500);
    }
    
});
