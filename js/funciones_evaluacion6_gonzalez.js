//variables 

var importe = prompt('Ingrese un importe para calcular el IVA correspondiente. El importe debe ser mayor a 0.')

var iva = (importe*0.21).toFixed(2)

var importeTotal =(importe*1.21).toFixed(2)

//cajas innerHTML

caja_calculo = document.getElementById('calculoIva')

caja_numeroInvalido = document.getElementById('numeroNegativo')

//caja estilo

caja_botonIva = document.getElementById('botonIva')

//imagenes

caja_calculadora = document.getElementById('calculadora')

caja_check = document.getElementById('check')

caja_wrong = document.getElementById('wrong')


function mostrar_iva() {

    if (importe> 0) {
	
    caja_calculo.innerHTML = 'Importe ingresado: ARS$ ' + importe + '<br/> IVA: ARS$ ' + iva + '<br/> <span class="importe_total"> Importe total: ARS$ '  + importeTotal + '</span>'
    caja_botonIva.style.color='#9834eb'
    caja_calculadora.style.display='none'
    caja_check.style.display='block'

    } else {

        caja_numeroInvalido.innerHTML = '<span class="invalido">Número inválido. <br/> Debe ingresar un importe mayor a 0. </span>';
        caja_botonIva.style.color='red' 
        caja_calculadora.style.display='none'
        caja_wrong.style.display='block'
    }

}



