import('./bootstrap');

// this file loads leaf mfe asynchronously by 
// providing webpack a chance, opportunity to fetch additional js code 
// contained in the bootstrap file

//if loaded bootstrap file directly, we would get an error because
//products/ProductsIndex has not been fetched yet