const validate = (val, rules, equalTo) =>{
    let isValid = true;

    for(let rule in rules){
        switch(rule){
            case "isEmail":
                isValid = isValid && emailValidator(val); //sempre checa se a regra anterior também é valida
                break;
            case "minLength":
                isValid = isValid && minLengthValidator(val, rules[rule]);
                break;
            case "equalTo":
                isValid = isValid && equalToValidator(val, equalTo[rule]);
                break;
            default:
                isValid = true;
                break;
        }
    }
    return isValid;
};

const emailValidator = val => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(val);
}

const minLengthValidator = (val, minLength) =>{
    return val.length >= minLength;
}

const equalToValidator = (val, val2) =>{
    return val === val2;
}

export default validate;