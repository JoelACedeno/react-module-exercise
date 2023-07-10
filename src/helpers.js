/** returns a randomly selected item from array of items
 */
function choice(items) {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

/** returns a copy of an array without first appearance of item
 * 
 * if item not found returns undefined 
 */
function remove(items, item) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)];
        }
    }
}

export { choice, remove }