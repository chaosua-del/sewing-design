/**
 * 
 * @param {number} val 
 * @param {number} max 
 * @param {number} min 
 * @returns {number}
 */
function normalize(val, max, min) {
    return (val - min) / (max - min);
}

export default normalize;
