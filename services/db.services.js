const findOneDb = (email, password) => {
    return new Promise((resolve, reject) => {
        // doing database search if user return it is resolved else it's rejected 
        // database injection  here we get the user and the password

        let user = { email, id: 2, password: "$2b$10$hwG4ic80q4jkDMrGuJwuxOCGJ63qX/izGHCwj0hYOSBEG53.FGmdW" }

        if (user) {
            resolve(user)
        } else {
            reject(new Error("there is an error "))
        }
    })
    // trying with . then directly when testing with parametere 
}

const findOneByIdDb = (id) => {
    return new Promise((resolve, reject) => {
        // doing database search if user return it is resolved else it's rejected 
        // database injection  we get the credentials 

        let user = { id, email: "mumuste.mend@gmail.com", password: "$2b$10$hwG4ic80q4jkDMrGuJwuxOCGJ63qX/izGHCwj0hYOSBEG53.FGmdW" }

        if (user) {
            resolve(user)
        } else {
            reject(new Error("there is an error "))
        }
    })
}
module.exports = { findOneDb, findOneByIdDb }