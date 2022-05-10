import { BACKGROUND_IMAGE_CHANGE, FONT_STYLE, HEADER_COLOR } from "./actionTypes";

export const headerStyleAction = (payload) => ({

    type: HEADER_COLOR,
    payload
})
export const fontStyleAction = (payload) => ({
    type: FONT_STYLE,
    payload
})
export const backgroundImageChangerAction = (payload) => ({
    type: BACKGROUND_IMAGE_CHANGE,
    payload
})