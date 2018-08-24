export const translation = {

}

export const getTransText = (key: string, language: string): any => {
    if (!language || !translation[key]) {
        return null;
    }
    return translation[key][language];
}