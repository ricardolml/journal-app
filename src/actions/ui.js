import { types } from '../types/types';

export const setError = ( err ) =>({
    type : types.uiSetErros,
    payload : err
})

export const removeError = () =>({
    type : types.uiRemoveErros,
})

export const startLoading = () =>({
    type : types.uiStartLoading,
})

export const finishLoading = () =>({
    type : types.uiFinishLoading,
})