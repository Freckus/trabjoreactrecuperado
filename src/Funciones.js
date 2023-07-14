export function Date() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const año = fechaActual.getFullYear();
  
    const fechaFormateada = `${dia}/${mes}/${año}`;
  
    return fechaFormateada;
  }