export const generateKey = (pre:number | string) => {
    return `${ pre }_${ new Date().getTime() }`;
}