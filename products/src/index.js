import('./bootstrap.js')

//we can load faker in browser multiple times
//but cannot load React in browser or else get an error

//to prevent multiple browser loads, 
//change webpack.config.js "shared" from a list of package strings
        //ie. shared: ["faker"]
//to an object for singleton like it is now
        // shared: { 
            //faker: {
                //singleton: true
          //  }
       // }

       //Be mindful of singleton rule when working with diff versions