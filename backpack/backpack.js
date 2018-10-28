function backpack(weights, values, totalWeight) {
    const n = weights.length
    const chart = new Array(n)
    for (let i = 0; i < n; i++) {
        chart[i] = []
    }
    for (let i = 0; i < weights.length; i++) {// weight arr
        for (let j = 0; j <= totalWeight; j++) {// totalWeight
            if (i === 0) {
                chart[i][j] = weights[i] > j ? 0 : values[i]
            } else {
                const lastValue = chart[i - 1][j]
                const newValue = values[i] + chart[i - 1][j - weights[i]] // 当前物品价值 + 剩余空间价值
                if (j < weights[i]) {
                    chart[i][j] = lastValue
                } else {
                    chart[i][j] = lastValue > newValue ? lastValue : newValue
                }
            }
        }
    }
    console.log(chart)
    console.log('result' + chart[n - 1][totalWeight])
    return chart[n - 1][totalWeight]
}
function multiBackpack(weights, values, numbers, totalWeight) {
    const n = weights.length
    const chart = new Array(n)
    for (let i = 0; i < n; i++) {
        chart[i] = []
    }
    for (let i = 0; i < weights.length; i++) {// weight arr
        for (let k = 0; k < numbers[i]; ++k)
            for (let j = 0; j <= totalWeight; j++) {// totalWeight
                if (i === 0) {
                    chart[i][j] = weights[i] > j ? 0 : values[i]
                } else {
                    const lastValue = chart[i - 1][j]
                    const newValue = values[i] + chart[i - 1][j - weights[i]] // 当前物品价值 + 剩余空间价值
                    if (j < weights[i]) {
                        chart[i][j] = lastValue
                    } else {
                        chart[i][j] = lastValue > newValue ? lastValue : newValue
                    }
                }
            }
    }
    console.log(chart)
    console.log('result' + chart[n - 1][totalWeight])
    return chart[n - 1][totalWeight]
}
function totalbackpack(weights, values, W) {
    const len = weights.length
    const arr = [0]
    for (let i = 0; i < len; ++i) {
        for (let j = weights[i]; j <= W; ++j) {
            const tmp = arr[j - weights[i]] + values[i]
            arr[j] = arr[j] > tmp ? arr[j] : tmp
        }
    }
    console.log(arr)
}

// backpack([1,4,3],[1500,3000,2000],4)
totalbackpack([1, 9, 3], [1500, 3000, 2000], 4)