// This is a basic implementation of a store, which is basically a global data file

// Any data that you want to use throughout the app can reside here
//(We can use a more encapsulated way with Context API, however)

export const store = {
    //let's store the info of the logged-in user (filled after successful login)
    loggedInUser:{
        userId:0,
        username:"",
        role:""
    }
    //NOT BEST PRACTICE BTW! For one, the data will be wiped if you refresh the browser
    //look into context API and local storage for a more modern take on this store
}