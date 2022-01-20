import {Plugin, Task, Option} from 'taqueria-sdk'
import type { i18n} from 'taqueria-sdk/types'
import {rickroll} from './tasks'

Plugin.create((i18n: i18n) => ({
    name: "taqueria-plugin-boilerplate-typescript",
    schema: "1.0",
    version: "0.1",
    tasks: [
        Task.create({
            task: "rickroll",
            command: "rickroll",
            description: "This is great!",
            aliases: ["rr"],
            handler: "proxy"
        }),
    ],
    proxy: rickroll,
}), process.argv)