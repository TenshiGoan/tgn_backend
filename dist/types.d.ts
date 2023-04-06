
import { ModuleOptions } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig { ['backend']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['backend']?: ModuleOptions }
}


export { ModuleOptions, default } from './module'
