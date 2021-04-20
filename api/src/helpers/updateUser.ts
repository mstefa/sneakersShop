export const handlerUpdateUser = (atr,input) => {
    switch(atr){
        case "firstName":
            return {
                firstName: input
            }
        case "lastName":
            return {
                lastName: input
            } 
        case "userName":
            return {
                userName: input
            }
        case "email":
            return {
                email: input
            }
        case "isAdmin":
            return {
                isAdmin: input
            }
        default:
            return atr
    }
}