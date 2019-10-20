export default {
  calculateAge: date => {
    let today = new Date();
    let birthday = new Date(date);
    let age = today.getFullYear() - birthday.getFullYear();
    let m = today.getMonth() - birthday.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
  },
  isEmpty: value => value === null || value === undefined || value.trim().length === 0,
  isEmail: value => value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
}
