import {
    CREATE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    SELECT_CONTACT,
    CLEAR_CONTACT,
    DELETE_SELECTED_CONTACT,
  } from "../constants/types";
  
  const intialState = {
    contacts: [
      {
        id: 1,
        name: "Jonas",
        email: "JonasThemes@gmail.com",
        phone: "111-222-333-444",
      },
    ],
    contact: null,
    selectedContacts: [],
  };
  
  export const contactReducer = (state = intialState, action) => {
    switch (action.type) {
      case CREATE_CONTACT:
        return {
          ...state,
          contacts: [action.payload, ...state.contacts],
        };
      case GET_CONTACT:
        let arr = state.contacts.filter(
          (contact) => contact.id == action.payload
        );
        arr = arr.values();
        for (let val of arr) {
          arr = val;
        }
        return {
          ...state,
          contact: arr,
        };
      case UPDATE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.map((contact) =>
            contact.id == action.payload.id ? action.payload : contact
          ),
        };
      case DELETE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.filter(
            (contact) => contact.id != action.payload
          ),
        };
      case DELETE_SELECTED_CONTACT:
        return {
          ...state,
          contacts: [],
        };
      case SELECT_CONTACT:
        return {
          ...state,
          selectedContacts: action.payload,
        };
  
      case CLEAR_CONTACT:
        return {
          ...state,
          selectedContacts: [],
        };
      default:
        return state;
    }
  };