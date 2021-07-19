export const ADD_TO_USER="ADD_TO_USER"
export const REMOVE_FROM_USER="REMOVE_FROM_USER"


export default function addToUser(user) {
    return {
        type : ADD_TO_USER,
        payload: user
    }

}
export function removeFromUser(user){
    return {
        type : REMOVE_FROM_USER,
        payload: user
    }
}
