var anio;
function isValidDate(day,month,year)

{

    var dteDate;


    dteDate=new Date(year,month,day);

    return ((day==dteDate.getDate()) && (month==dteDate.getMonth()) && (year==dteDate.getFullYear()));
    anio = year


}

 

function validate_fecha(fecha)

{

    var patron=new RegExp("^(19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");

 

    if(fecha.search(patron)==0)

    {

        var values=fecha.split("-");

        if(isValidDate(values[2],values[1],values[0]))

        {

            return true;

        }

    }

    return false;

}


function validar_fecha()

{

    var fecha=document.getElementById("user_date").value;

    if(validate_fecha(fecha)==true)

        document.getElementById("result").innerHTML="La fecha "+fecha+" es correcta";

    else

        document.getElementById("result").innerHTML="La fecha "+fecha+" es incorrecta";

}

function bisiesto (){


		if ((anio% 4 == 0) && (anio % 100 != 0) || (anio % 400 == 0)){

		   alert('bisiesto');

		}else {

			alert (' no es bisiesto');
		}


		}

		function sumar_7_dias (){

		}
