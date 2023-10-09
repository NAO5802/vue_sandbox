import { describe, test, expect } from 'vitest'
import {increment} from "../helper";

describe('increment', () => {
    test('increment the current by 1', () => {
        expect(increment(0, 10)).toBe(1)
    })

    test('do not increment the current over the max', () => {
        expect(increment(10, 10)).toBe(10)
    })
})
