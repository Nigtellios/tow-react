/**
 * Method Used to calculate pixels to REM.
 * @param px
 * @returns {string}
 */
const rem = (px): string => {
  return (px / 16) + 'rem';
}

export default rem;