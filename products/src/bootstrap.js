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



// let products = "";

// for (let i = 0; i< 5; i++){
//     const name = faker.commerce.productName();

//     products += `<div>${name}</div>`;
// }

//document.querySelector('#dev-products').innerHTML = products;
// need to add div with classname inside container index.html

//the querySelector is not good, because it assumes the name of div in container.
    //container theoretically managed by other team

//Situation 1: 
    //Local development with DEFINITE element in th index.html

    const mount = (htmlElement) => { //arbitrary function name
        
let products = "";

for (let i = 0; i< 5; i++){
    const name = faker.commerce.productName();

    products += `<div>${name}</div>`;
}

htmlElement.innerHTML = products;
    };

    if (process.env.NODE_ENV === 'development') {//we added in mode of development in webpack config
                                                //so webpack provides this
                                                //but we could be in development mode with container so need another check
        const element = document.querySelector('#dev-products');

        //we assume dev-products id is only local. not good assumption could be in container too
        //but, we can always change local name to make it unique
        if (element){
            mount(element); //if we found element, we are probably in development (local)

        }
    }
//Situation 2: 
    //Running in production through container app with 
    //No guarantee that Element in index.html
    //do not Immediately render app, we want asynchronous
export {mount}; //container can call mount function whenever it wants now

//NOW since we added mount in bootstrap, we do not want to give ModuleFederationPlugin 
// the index.js file, we want to give them the bootstrap since it is exporting the mount function