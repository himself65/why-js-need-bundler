---
theme: default
---

# Why JS needs bundler

---

# Cover

- Module resolution
- Transcompiler → Bundler
- Typecheck
- Release a TS package

---

# Browser Module resolution

HTML script tag

```html
<script>
  console.log('Hello, world!');
</script>
```

There is no `import` or `require`

[//]: # (See example `packages/browser`)

---

# Node.js

[//]: # (See example `packages/node`)

---

# Transcompiler → Bundler

---

# Type Check

---

# Release a TS package

- Node.js Library 
  - transcompiler
- UI Library 
  - bundler
- SDK for any JS environment 
  - transcompiler (downgrade JS, polyfill)
  - bundler (tree-shaking, minify, multiple matrix strategy)

---

END
