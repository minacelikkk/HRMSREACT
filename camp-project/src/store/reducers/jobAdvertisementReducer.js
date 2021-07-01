import jobAdvertisementItems from "../initialValues/jobAdvertisementItems"
const initialState = {
  jobAdvertisementItems:jobAdvertisementItems,
};

export default function jobAdvertisementReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_JOB_ADVERTISEMENT:
      let jobAdvertisement = state.jobAdvertisementItems.find((j) => j.jobAdvertisement.id === payload.id);
      if (jobAdvertisement) {
        jobAdvertisement.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          jobAdvertisementItems: [...state.jobAdvertisementItems, { jobAdvertisement:payload }],
        };
      }

    case REMOVE_FROM_JOB_ADVERTISEMENT:
      return {
        ...state,
        jobAdvertisementItems: state.jobAdvertisementItems.filter((j) => j.jobAdvertisement.id !== payload.id),
      };
    default:
      return state;
  }
}