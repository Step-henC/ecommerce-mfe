import faker from 'faker';
//shared dependencies like faker work in mfe but not in standalone
//reason is because marking as shared loads asynchronously
//faker not available on standalone app load
//to fix, load faker file asynchronously by using import() function 
// in index.js file

//if using two different verions of faker for here and cart, 
//both copies of faker versions will be loaded, regardless
//of shared declaration in ModuleFederationPlugin
//adding carats in package.json will make all major releases acceptable to use

//we can load faker in browser multiple times
//but cannot load React in browser or else get an error

let products = "";

for (let i = 0; i< 5; i++){
    const name = faker.commerce.productName();

    products += `<div>${name}</div>`;
}

document.querySelector('#dev-products').innerHTML = products;
// need to add div with classname inside container index.html