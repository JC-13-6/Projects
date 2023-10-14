//js  code//

let input=document.getElementById('box');
let buttons=document.querySelectorAll('button');
let string="";
let array=Array.from(buttons);

array.forEach(button => {

    button.addEventListener('click',(event) =>{
        if(event.target.innerHTML == '='){
            string=eval(string);
            input.value=string;

        }
        else if(event.target.innerHTML =='AC'){
            string="";
            input.value=string;

        }

        else if(event.target.innerHTML =='DEL'){
            string = string.substring(0, string.length -1);
            input.value=string;
        }

        else{
            string += event.target.innerHTML;
            input.value= string;

        }
    })

})
