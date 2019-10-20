export default {
  isEmpty: value =>
    value === null || value === undefined || value.trim().length === 0,
  isEmail: value => value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
};
