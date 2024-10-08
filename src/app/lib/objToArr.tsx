export const convertObjToArr = (obj: any) => {
    let arr = [];
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const element = obj[key as keyof typeof obj];
            arr.push(element)
        }
    }
    return arr;
}