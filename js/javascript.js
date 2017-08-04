var ob_alumno =[{
	"codigo":"001",
	"nombre":"Hernan",
	"nota":27},
	{
	"codigo":"002",
	"nombre":"Hecto",
	"nota":87},
	{
	"codigo":"003",
	"nombre":"Cristina",
	"nota":78},
	{
	"codigo":"004",
	"nombre":"Isabel",
	"nota":68},
	{
	"codigo":"005",
	"nombre":"Doris",
	"nota":54},
	{
	"codigo":"006",
	"nombre":"Fernada",
	"nota":70},
	{
	"codigo":"007",
	"nombre":"Yocesli",
	"nota":100},
	{
	"codigo":"008",
	"nombre":"Manuel",
	"nota":60},
	{
	"codigo":"009",
	"nombre":"Oscar",
	"nota":69},
	{
	"codigo":"010",
	"nombre":"Maria",
	"nota":57}];


//muestra la lista de alumnos y sus notas
function lista_alumno(){
	var i =0;
	var l_html="";

	for( i in ob_alumno){
		l_html+='<tr><th id="cod">Codigo</th><th id="nom">Nombre</th><th id="nota">Nota</th></tr><tr><td>'+ob_alumno[i].codigo+"</td><td>"+ob_alumno[i].nombre+"</td><td>"+ob_alumno[i].nota+"<td></tr>";
		//alert(ob_alumno[i].codigo);
		
	}
	//alert(l_html);
	document.getElementById("tabla").innerHTML=l_html;
} 

//busca la nota mayor

function buscar_mayor(){
	var i=1;
	var mayor="";
	var valor=0;
	for(i in ob_alumno){
		if (ob_alumno[i].nota> valor){
			valor= ob_alumno[i].nota;
			mayor='<tr><th id="cod">Codigo</th><th id="nom">Nombre</th><th id="nota">Nota</th></tr><tr><td>'+ob_alumno[i].codigo+"</td><td>"+ob_alumno[i].nombre+"</td><td>"+ob_alumno[i].nota+"<td></tr>";
		}
			
	}
	document.getElementById("tabla").innerHTML=mayor;
}

//sacar el  promedio del la notas

function sacar_promedio(){
	var i=0;
	var conta=1;
	var suma=0;
	for(i in ob_alumno){
		suma+=ob_alumno[i].nota;
		conta++;
	}
	resulta=suma/conta;
	document.getElementById("tabla").innerHTML="<tr><th>promedio de notas </th></tr><tr><td>"+resulta.toFixed(2)+"</td></tr>"
}

//busca la nota menor de toda la lista

function buscar_menor(){
	var i=0;
	var menor='';
	var valor=100;
	for(i in ob_alumno){
		if(valor>ob_alumno[i].nota){
			valor=ob_alumno[i].nota;
			menor='<tr><th id="cod">Codigo</th><th id="nom">Nombre</th><th id="nota">Nota</th></tr><tr><td>'+ob_alumno[i].codigo+"</td><td>"+ob_alumno[i].nombre+"</td><td>"+ob_alumno[i].nota+"<td></tr>";
		}
		alert(menor);
	}
	document.getElementById("tabla").innerHTML=menor;
}