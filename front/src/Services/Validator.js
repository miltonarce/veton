export default {
  /**
   * Validate is empty the value
   * @param {string} value
   * @returns {bool}
   */
  isEmpty: value =>
    value === null || value === undefined || value.trim().length === 0,
  /**
   * Validate is email valid with regex
   * @param {string} value
   * @returns {bool}
   */
  isEmail: value => value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
};
