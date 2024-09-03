export function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

export function formatNum(value: number) {
    const num = Number(value)
    const absNum = Math.abs(num)
    const sign = Math.sign(num)
    const numLength = Math.round(absNum).toString().length
    const symbol = ['K', 'M', 'B', 'T', 'Q']
    const symbolIndex = Math.floor((numLength - 1) / 3) - 1
    const abbrv = symbol[symbolIndex] || symbol[symbol.length - 1]
    let divisor = 0

    if (numLength > 15) divisor = 1e15
    else if (numLength > 12) divisor = 1e12
    else if (numLength > 9) divisor = 1e9
    else if (numLength > 6) divisor = 1e6
    else if (numLength > 3) divisor = 1e3
    else return num

    return `${((sign * absNum) / divisor).toFixed(divisor && 1)}${abbrv}`
}

export function formatTemplate(str: string, args: { [key: string]: unknown }) {
    if (!args) {
        return str;
    }

    for (const key of Object.keys(args)) {
        str = str.replaceAll(`{${key}}`, String(args[key]));
    };

    return str;
};