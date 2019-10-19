const calculateAge = date => {
  let today = new Date();
  let birthday = new Date(date);
  let age = today.getFullYear() - birthday.getFullYear();
  let m = today.getMonth() - birthday.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
}

export default calculateAge;