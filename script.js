function irReservas(){document.getElementById("reservas").scrollIntoView({behavior:"smooth"})}
function seleccionarServicio(servicio){document.getElementById("servicio").value=servicio;document.getElementById("reservas").scrollIntoView({behavior:"smooth"})}
const formulario=document.getElementById("formulario");
formulario.addEventListener("submit",function(event){
    event.preventDefault();
    const nombre=document.getElementById("nombre").value;
    const servicio=document.getElementById("servicio").value;
    const fecha=document.getElementById("fecha").value;
    const hora=document.getElementById("hora").value;
    document.getElementById("mensajeReserva").innerHTML="✅ Gracias <strong>"+nombre+"</strong>. Tu reserva para <strong>"+servicio+"</strong> fue registrada para el "+fecha+" a las "+hora+".";
    formulario.reset();
});