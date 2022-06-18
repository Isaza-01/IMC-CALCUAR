var pacientes = document.querySelectorAll (".paciente");


for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes [i];

    var tdPeso = paciente.querySelector (".info-peso");
    var peso= tdPeso.textContent;

    var tdAltura = paciente.querySelector (".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector (".info-imc");
    var imc = (peso / (altura * altura));
    tdIMC.textContent= imc;

    var pesoEsValido= true;
    var alturaEsValido = true;

    if ((peso < 0) || (peso > 1000)){
        //console.log ("Peso incorrecto");
        tdIMC.textContent= ("Peso incorrecto");
        pesoEsValido= false;
        paciente.classList.add ("paciente-incorrecto");
    }

    if ((altura < 0) || (altura > 3.00)){
        //console.log ("Altura incorrecto");
        tdIMC.textContent= ("Altura incorrecto");
        alturaEsValido = false;
        paciente.classList.add ("paciente-incorrecto");
    }

   /* if (pesoEsValido && alturaEsValido){
        var imc = (peso / (altura * altura));
        tdIMC.textContent= imc.toFixed(2); 
    }*/ //este era el código original

    if (pesoEsValido && alturaEsValido){
        tdIMC.textContent= calcularIMC (peso,altura); 
    }

}

function calcularIMC (peso,altura){
    var imc = (peso / (altura * altura));
    return imc.toFixed(2);

}