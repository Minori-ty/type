//自定义cdn引入的全局变量
declare module AMap {
    export class Map {
        constructor(container: string, data: Config)
    }
    export interface Config {
        name?: string
        age?: number
    }
}
