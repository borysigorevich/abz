import {
    ADD_PAGE, REFETCH_USERS, RESET_FORM,
    RESET_PAGE,
    SET_EMAIL,
    SET_FILE,
    SET_NAME,
    SET_PHONE,
    SET_POSITION, SET_REFETCH, SET_TOKEN,
    SET_TOTAL_PAGES,
    SET_USERS, SET_VALIDATION
} from "./actions";

export const setToken = token => ({
    type: SET_TOKEN,
    payload: token
})

export const setUser = users => ({
    type: SET_USERS,
    payload: users
})

export const refetchUser = users => ({
    type: REFETCH_USERS,
    payload: users
})

export const setName = name => ({
    type: SET_NAME,
    payload: name
})

export const setEmail = email => ({
    type: SET_EMAIL,
    payload: email
})

export const setPhone = phone => ({
    type: SET_PHONE,
    payload: phone
})

export const setFile = file => ({
    type: SET_FILE,
    payload: file
})

export const setPosition = position => ({
    type: SET_POSITION,
    payload: position
})

export const setTotalPages = pages => ({
    type: SET_TOTAL_PAGES,
    payload: pages
})

export const addPage = () => ({
    type: ADD_PAGE,
})

export const resetPage = () => ({
    type: RESET_PAGE,
})

export const setValidation = (input, value) => ({
    type: SET_VALIDATION,
    payload: {
        input,
        value
    }
})

export const setRefetch = () => ({
    type: SET_REFETCH
})

export const resetForm = () => ({
    type: RESET_FORM
})