export default function divideFunction(numerator, denominator) {
    try {
        if (denominator > 0) {
            return numerator / denominator
        } else {
            throw new Error('cannot divide by 0')
        }
    } catch (error) {
        throw new Error(error)
    }
}