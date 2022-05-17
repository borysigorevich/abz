import axios from "axios";
import {resetPage} from "../../context/actioinsCreators";

export const registerUser = async (formData, token, dispatch) => {
    await axios.post('https://frontend-test-assignment-api.abz.agency/api/v1/users', formData, {
        headers: {
            'Token': token
        }
    })
    dispatch(resetPage())
}