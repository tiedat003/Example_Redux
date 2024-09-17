
import {
    FETCH_PHOTOS_REQUEST,
    FETCH_PHOTOS_SUCCESS,
    FETCH_PHOTOS_FAILURE,
} from './actions';

const initialState = {
    loading: false,
    items: [],
    error: null,
};

const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PHOTOS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_PHOTOS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload,
            };
        case FETCH_PHOTOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default photosReducer;
