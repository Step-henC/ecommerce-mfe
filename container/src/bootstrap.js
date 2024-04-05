import 'products/ProductsIndex';
import 'cart/CartShow';

//in the import, the "products" matches the 
//ModuleFederationPlugin.remotes.products in this webpack.config.js for 
//this module

//then. webpack will know to search the url for alias in prefix of url
//alias for url prefix defined in 'exposes' property

//the url in the 
console.log('container')