// reducers.js
import { SET_USER_DETAILS } from "./action";
// import { SET_URL, SET_USER_DETAILS, SET_VERIFY_PAYMENT } from "./action";

// Helper function to extract gId from URL
// const extractgId = (url) => {
//   const parts = url.split("/");
//   return parts.length > 1 ? parts[parts.length - 1] : "";
// };
// Helper function to get saved data from session storage
const getSavedData = () => {
  // const savedgId = sessionStorage.getItem("gId");
  const savedDetails = sessionStorage.getItem("userDetails");
  // const savedPayment = sessionStorage.getItem("paymentRecipt");
  return {
    // gId: savedgId ? JSON.parse(savedgId) : "",
    userDetails: savedDetails ? JSON.parse(savedDetails) : null,
    // paymentRecipt: savedPayment ? JSON.parse(savedPayment) : null,
  };
};

// Initial state with data from session storage
const initialState = {
  // gId: getSavedData().gId,
  userDetails: getSavedData().userDetails,
  // paymentRecipt: getSavedData().paymentRecipt,
};

const urlReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_URL:
    //   const gId = extractgId(action.payload);
    //   sessionStorage.setItem("gId", JSON.stringify(gId));
    //   return {
    //     ...state,
    //     gId,
    //   };

    case SET_USER_DETAILS:
      sessionStorage.setItem("userDetails", JSON.stringify(action.payload));
      return {
        ...state,
        userDetails: action.payload,
      };

    // case SET_VERIFY_PAYMENT:
    //   sessionStorage.setItem("verifyPayment", JSON.stringify(action.payload));
    //   return {
    //     ...state,
    //     verifyPayment: action.payload,
    //   };

    default:
      return state;
  }
};

export default urlReducer;
