export default {
  /**
   * Check if empty value
   * @param {string} value
   * @returns {boolean}
   */
  isEmpty: value =>
    value === null || value === undefined || value.trim().length === 0,
  /**
   * Check if mail is valid with regex expression
   * @param {string} value
   * @returns {boolean}
   */
  isEmail: value => value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
};
