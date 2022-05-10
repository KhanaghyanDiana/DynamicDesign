import { images } from "../images/images"
import { BACKGROUND_IMAGE_CHANGE, FONT_STYLE, HEADER_COLOR } from "./actionTypes"

const initialState = {
    colorHeader: "yellow",
    textStyles: "",
    backgroundImageChanger: images.imageTwo
}

export const styleProvider = (state = initialState, action) => {
    switch (action.type) {
        case FONT_STYLE:
            return {
                ...state,
                textStyles: action.payload
            }
        case HEADER_COLOR:
            return {
                ...state,
                colorHeader: action.payload
            }
        case BACKGROUND_IMAGE_CHANGE:
            return {
                ...state,
                backgroundImageChanger: action.payload
            }

        default:
            return {
                ...state

            }
    }
}