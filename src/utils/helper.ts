export function increment(current: number, max = 10): number {
    if (current >= max) {
        return current
    }
    return current + 1
}
