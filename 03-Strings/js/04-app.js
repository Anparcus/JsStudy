const producto = '            Monitor 20 Pulgadas                  ';

console.log(producto);
console.log(producto.length);


// Eliminar del inicio...
console.log(producto.trimStart());
console.log(producto.length);

// Eliminar del final...
console.log(producto.trimEnd());
console.log(producto.length);

// Eliminar del inicio y final...
console.log(producto.trimStart().trimEnd());
console.log(producto.length);


// Eliminar del inicio y final con trim()...
console.log(producto.trim());
console.log(producto.length);