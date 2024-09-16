
// Action types
export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

// Action creators
export const fetchPhotosRequest = () => ({
    type: FETCH_PHOTOS_REQUEST,
});

export const fetchPhotosSuccess = (photos) => ({
    type: FETCH_PHOTOS_SUCCESS,
    payload: photos,
});

export const fetchPhotosFailure = (error) => ({
    type: FETCH_PHOTOS_FAILURE,
    payload: error,
});

// Async action creator (Thunk)
export const fetchPhotos = () => {
    return (dispatch) => {
        dispatch(fetchPhotosRequest());
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((data) => dispatch(fetchPhotosSuccess(data.slice(0, 10)))) // Lấy 10 ảnh đầu tiên
            .catch((error) => dispatch(fetchPhotosFailure(error.message)));
    };
};
