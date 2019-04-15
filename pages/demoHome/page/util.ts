import * as _ from 'lodash';
export const compare = (obj1: any, obj2: any) => {
    // key要一样，对比state，props用
    const keys1: string[] = Object.keys(obj1);
    const keys2: string[] = Object.keys(obj2);
    if (JSON.stringify(keys1) !== JSON.stringify(keys2)) {
        throw Error('not a similar Object');
    }
    // tslint:disable-next-line:forin
    for (const i in keys1) {
        const key: string = keys1[i];
        if (_.isNil(obj1[key]) || _.isNil(obj2[key])) {
            if (obj1[key] !== obj2[key]) { 
                return false;
            }
            continue;
        }
        const type: string = obj1[key].constructor.name;
        switch (type) {
            case 'String': {
                if (obj1[key] !== obj2[key]) {
                    return false;
                }
                break;
            }
            case 'Boolean': {
                if (obj1[key] !== obj2[key]) {
                    return false;
                }
                break;
            }
            case 'Number': {
                if (obj1[key] !== obj2[key]) {
                    return false;
                }
                break;
            }
            case 'Array': {
                try {
                    if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) {
                        return false;
                    }
                } catch (e) {
                    window.console.warn('');
                    break;
                }
                break;
            }
            case 'Object': {
                try {
                    if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) {
                        return false;
                    }
                } catch (e) {
                    window.console.warn('');
                    break;
                }
                break;
            }
            default: {
                //
            }
        }
    }
    return true;
};
