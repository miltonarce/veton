const calculateAge = FechaNacimiento => {
  if (FechaNacimiento === null) return "Sin cumpleaños";
  let fechaNace = new Date(FechaNacimiento);
  let fechaActual = new Date();
  let mes = fechaActual.getMonth();
  let dia = fechaActual.getDate();
  let año = fechaActual.getFullYear();
  fechaActual.setDate(dia);
  fechaActual.setMonth(mes);
  fechaActual.setFullYear(año);
  let edad = Math.floor(((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365));


  return edad < 0 ? null : edad;

}
export default calculateAge;
