import enquire from 'enquire.js'

export interface Handler {
	match: () => void
	unmatch: () => void
}
export type EnquireScreen = (cb: (isMobile?: boolean) => void, query?: string) => Handler | undefined
export type UnenquireScreen = (handler: Handler, query?: string) => void

let enquireJs: typeof enquire | undefined = void 0

if (typeof window !== 'undefined') {
	const matchMediaPolyfill = (mediaQuery: string) => {
		return {
			media: mediaQuery,
			matches: false,
			addListener() {},
			removeListener() {},
		}
	}
	window.matchMedia = window.matchMedia || matchMediaPolyfill
	enquireJs = require('enquire.js')
}

const mobileQuery = 'only screen and (max-width: 767.99px)'

export const enquireScreen: EnquireScreen = (cb, query = mobileQuery) => {
	if (!enquireJs) {
		return
	}

	const handler: Handler = {
		match: () => {
			cb && cb(true)
		},
		unmatch: () => {
			cb && cb()
		},
	}
	enquireJs.register(query, handler)
	return handler
}

export const unenquireScreen: UnenquireScreen = (handler, query = mobileQuery) => {
	if (!enquireJs) {
		return
	}
	enquireJs.unregister(query, handler)
}

export default enquireJs
