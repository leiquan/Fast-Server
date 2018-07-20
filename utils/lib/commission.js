// 微信手续费计算方法,传入参数，单位为分
const wx = (total_fee) => {
    return Math.round(total_fee / 100 * 6 / 1000 * 100) / 100 * 100
}

module.exports = { wx };