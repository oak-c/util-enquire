# enquire.js 的二次封装

![](https://img.shields.io/badge/Language-TypeScript-orange.svg)
[![Build Status](https://travis-ci.com/oak-c/util-holidays.svg?branch=main)](https://travis-ci.com/oak-c/util-holidays)
[![Coverage Status](https://coveralls.io/repos/github/oak-c/util-holidays/badge.svg)](https://coveralls.io/github/oak-c/util-holidays)
[![](https://img.shields.io/npm/v/util-holidays.svg)](https://www.npmjs.com/package/util-holidays)

### version

#### v1.0.0

    - 初始化

### 安装

```bash
# 安装
npm i util-holidays
# 或者 yarn add util-holidays
```

### util-enquire

```typescript
import enquireJs from 'enquire.js'
export interface Handler {
	match: () => void
	unmatch: () => void
}
export declare type EnquireScreen = (cb: (isMobile?: boolean) => void, query?: string) => Handler | undefined
export declare type UnenquireScreen = (handler: Handler, query?: string) => void
export declare const enquireScreen: EnquireScreen
export declare const unenquireScreen: UnenquireScreen
export default enquireJs
```

### enquireScreen(cb, query):

| name  | type   | default                                 | description                              |
| ----- | ------ | --------------------------------------- | ---------------------------------------- |
| cb    | func   | null                                    | cb(boolean), boolean 为 true 则为 mobile |
| query | string | `only screen and (max-width: 767.99px)` | css 的场景判断                           |

### unenquireScrenn(handler, query);

| name    | type   | default                                 | description                              |
| ------- | ------ | --------------------------------------- | ---------------------------------------- |
| handler | object | null                                    | 需要卸载的 `enquireScreen` 返回 handler; |
| query   | string | `only screen and (max-width: 767.99px)` | css 的场景判断                           |
