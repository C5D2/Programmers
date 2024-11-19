function solution(order) {
    const latteCount = order.filter((item) => item.includes("latte")).length
    const result = latteCount * 5000 + (order.length - latteCount) * 4500
    return result;
}