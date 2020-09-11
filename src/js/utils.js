/**
 * 
 * @param {number} val 
 * @param {number} max 
 * @param {number} min 
 * @returns {number}
 */
export function normalize(val, max, min) {
    return (val - min) / (max - min);
}

/**
 * 
 * @param {number} val 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
}
