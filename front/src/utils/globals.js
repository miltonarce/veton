const calculateAge = FechaNacimiento => {
  if (FechaNacimiento === null) return "Sin cumpleaños";
  const fechaNace = new Date(FechaNacimiento);
  const fechaActual = new Date();
  const mes = fechaActual.getMonth();
  const dia = fechaActual.getDate();
  const año = fechaActual.getFullYear();
  fechaActual.setDate(dia);
  fechaActual.setMonth(mes);
  fechaActual.setFullYear(año);
  const edad = Math.floor(
    (fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365
  );

  return edad < 0 ? null : edad;
};
export default calculateAge;
