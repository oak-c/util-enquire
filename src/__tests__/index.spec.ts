// @ts-nocheck
import { enquireScreen, unenquireScreen, Handler } from '../index'
let handler: Handler | undefined

test('enquireScreen without window', () => {
	const windowSpy = jest.spyOn(global, 'window', 'get')
	windowSpy.mockImplementation(() => undefined)
	expect(require('../index'))
})
test('enquireScreen', () => {
	const originalWindow = { ...window }
	const windowSpy = jest.spyOn(global, 'window', 'get')
	windowSpy.mockImplementation(
		() =>
			({
				...originalWindow,
				matchMedia: () => ({
					matches: false,
					addListener: (fn: any) => void 0,
					removeListener: () => void 0,
				}),
			} as any)
	)
	expect((handler = enquireScreen((e: any) => {}, '')))
})

test('unenquireScreen', () => {
	const originalWindow = { ...window }
	const windowSpy = jest.spyOn(global, 'window', 'get')
	windowSpy.mockImplementation(
		() =>
			({
				...originalWindow,
				matchMedia: () => ({ matches: false, addListener: () => void 0, removeListener: () => void 0 }),
			} as any)
	)
	expect(unenquireScreen(handler as Handler))
})
