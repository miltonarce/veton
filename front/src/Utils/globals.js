/**
 * Method to get the current age from pet
 * @param {date}
 * @returns {number}
 */
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

/**
 * Get the free hours avalaibles for appointments
 * @param {object[]}
 * @returns {object}
 */
const findFreeHours = appointments => {
  const APPOINTMENTS_HOURS = ['9-10', '10-11', '11-12', '13-14', '15-16', '16-17', '17-18', '19-20'];
  const hoursSelectedByDate = appointments.map(appointment => appointment.time);
  return APPOINTMENTS_HOURS.filter(time => !hoursSelectedByDate.includes(time));
}

export {
  calculateAge,
  findFreeHours
}
