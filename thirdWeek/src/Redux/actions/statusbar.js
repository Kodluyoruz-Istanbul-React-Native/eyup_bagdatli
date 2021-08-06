import * as userTypes from '../types/user';


export const changecolorstatusbar = (color) => async dispatch => {

    dispatch({
        type: userTypes.CHANGE_COLOR_STATUSBAR,
        payload: color

    });



}