
import { CHANGE_COLOR_STATUSBAR } from "../types/user";


const initialState = {
    statusbarcolor: "white",

};


export const statusbar = (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_COLOR_STATUSBAR:
            return { ...state, statusbarcolor: payload };


        default:
            return state;
    }
}