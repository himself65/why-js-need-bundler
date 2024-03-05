import { register } from 'node:module'
import { pathToFileURL } from 'node:url'

register('./loader.mjs', {
  parentURL: import.meta.url,
  data: {
    model: 'llama2'
  }
})

const { default: m } = await import(pathToFileURL('./dummy.pdf'))
console.log('parse:', m)
