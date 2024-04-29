export function roundUpOneDecimal(num:number) {
    let rounded = Math.ceil(num * 10) / 10;
    return rounded.toFixed(1);
}