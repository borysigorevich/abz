import {
    ADD_PAGE,
    REFETCH_USERS, RESET_FORM,
    RESET_PAGE,
    SET_EMAIL,
    SET_FILE,
    SET_NAME,
    SET_PHONE,
    SET_POSITION, SET_REFETCH,
    SET_TOKEN,
    SET_TOTAL_PAGES,
    SET_USERS,
    SET_VALIDATION
} from "./actions";

export const appReducer = (state, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.payload]
            }
        case REFETCH_USERS:
            return {
                ...state, users: action.payload
            }
        case SET_NAME:
            return {
                ...state, name: action.payload
            }
        case SET_EMAIL:
            return {
                ...state, email: action.payload
            }
        case SET_PHONE:
            return {
                ...state, phone: action.payload
            }
        case SET_FILE:
            return {
                ...state, file: action.payload
            }
        case SET_POSITION:
            return {
                ...state, position: action.payload
            }
        case SET_TOTAL_PAGES: {
            return {
                ...state, totalPages: action.payload
            }
        }
        case ADD_PAGE:
            return {
                ...state, page: state.page + 1
            }
        case RESET_PAGE:
            return {
                ...state,
                page: 1,
                refetch: true,
            }
        case SET_REFETCH:
            return {
                ...state,
                refetch: false,
            }
        case SET_VALIDATION:
            return {
                ...state,
                validation: {
                    ...state.validation,
                    [action.payload.input]: action.payload.value
                }
            }
        case RESET_FORM:
            return {
                ...state,
                name: '',
                phone: '',
                email: '',
                file: '',
                position: '1',
                validation: {
                    name: false,
                    email: false,
                    phone: false,
                    file: false,
                }
            }
        default:
            return state
    }
}
