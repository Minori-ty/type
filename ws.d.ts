//自定义包的类型声明
declare module 'ws' {
    export class Map {
        constructor(container: string, data: Config)
    }
    export interface Config {
        name?: string
        age?: number
    }
}
