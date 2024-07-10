let inp1 = document.querySelector('.inp1');
let btn1 = document.querySelector('.btn1');
let inp2 = document.querySelector('.inp2');
let btn2 = document.querySelector('.btn2');
let ul = document.querySelector('ul');

btn1.addEventListener("click", function(event){
    if(inp1.value.length>0){
        let nweli = document.createElement("li");
        nweli.textContent = inp1.value;

        let icon = document.createElement('i');
        icon.classList.add("fa-solid", "fa-xmark");
        icon.style.position = "relative";
        icon.style.left = "0.5rem"
        icon.style.top = "0.15rem"

        ul.appendChild(nweli);
        nweli.appendChild(icon);

        inp1.value = "";
    }
});
btn2.addEventListener("click", function(){
    let inp2v = inp2.value;
    let lis = document.querySelectorAll('li');
    for(li of lis){
        if(li.textContent === inp2v){
            li.remove();
            inp2.value = "";
        } else{
            inp2.value = "";
        }
    }
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "I"){
        event.target.parentNode.remove();
    }
});