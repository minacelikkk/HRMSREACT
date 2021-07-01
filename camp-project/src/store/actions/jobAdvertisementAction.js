export const ADD_TO_JOB_ADVERTISEMENT="ADD_TO_JOB_ADVERTISEMENT"
export const REMOVE_FROM_JOB_ADVERTISEMENT="REMOVE_FROM_JOB_ADVERTISEMENT"


export default function addToJobAdvertisement(jobAdvertisement) {
    return {
        type : ADD_TO_JOB_ADVERTISEMENT,
        payload: jobAdvertisement
    }

}
export function removeFromjobAdvertisement(jobAdvertisement){
    return {
        type : REMOVE_FROM_JOB_ADVERTISEMENT,
        payload: jobAdvertisement
    }
}
