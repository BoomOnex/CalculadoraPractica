//Esta funcion hace que primero se carge la pagina html 
window.addEventListener('load',()=>{
    //el document.querySelector  busca el primer elemento que encuentre y lo guarda.
    const display = document.querySelector('.calculator-display'); //con esto estoy guardando el display en la constante.

    //el getElemtesClassName hace que busque nuestra clase html.
    const keypadButtons = document.getElementsByClassName('keypad-button'); //Guarda un html colecction en la constante. 

    //Se crea otra constante  para convertir el htmlColecction en una array.
    const keypadButtonsArray = Array.from(keypadButtons);

    //Iteramos por nuestro nuevo array de botones osea llamamos a la array list que tiene el htmlcolecction.
    keypadButtonsArray.forEach((button) => {
        //A cada boton le agregamos un "Listener" hace que el usuario al hacer click imprime el texto que tiene cada boton.
        button.addEventListener('click',()=>{
            calculadora(button,display);
        })
    })
});

  //Dependiendo del boton que se precione se tomara una accion predeterminada.
  function calculadora(button,display){

  //El innerHTML trae el numero que tiene arriba del boton.
    switch(button.innerHTML){
        case 'C':
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
        default:
            actualizar(display,button);
            break;       
    }
}

function calcular(display){
   //Toma el string lo resuelve y lo guarda en el innerHTML del display.
    display.innerHTML = eval(display.innerHTML)
}
//Esta funcion tiene que borrar el CERO inicial si existe y agregar el innerHTML del botom que hicimos click.
function actualizar(display,button){
    if(display.innerHTML ==0){
        display.innerHTML ='';
    }
    //Esto hace que cada numero que apretemos uno al lado del otro dentro del display.
    display.innerHTML += button.innerHTML; //Esto es lo mismo que display.innerHTML = display.innerHTML + button.innerHTML.
}
function borrar(display){
    display.innerHTML=0;
}