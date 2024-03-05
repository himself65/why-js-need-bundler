import { LlamaParseReader } from 'llamaindex'
import { fileURLToPath } from 'node:url'

const parse = new LlamaParseReader({
  apiKey: 'llx-OIXKoxVB6g5qhvOsSarbakfML47v6vtBUumy7fD6QYtaSKQb'
})

export async function initialize ({ model: m }) {
}

export async function load (id, context, nextLoad) {
  const url = new URL(id)
  if (url.protocol === 'file:' && url.pathname.endsWith('.pdf')) {
    const data = await parse.loadData(fileURLToPath(url))
    return {
      format: 'json',
      shortCircuit: true,
      source: JSON.stringify(data, null, 2)
    }
  } else {
    return await nextLoad(id, context)
  }
}