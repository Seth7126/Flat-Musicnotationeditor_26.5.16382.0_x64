// Provide process.nextTick polyfill for Node.js stream libraries
// (blob-stream / pdfkit use readable-stream which expects this global).
// Vite's `define` handles process.env.* at compile time; this only
// provides the runtime methods that stream polyfills need.
window.process = window.process || {};
window.process.env = window.process.env || {};
window.process.nextTick = (fn, ...args) => {
  queueMicrotask(() => {
    fn.apply(null, args);
  });
};

// Pre-initialize flatSettings as an empty object before any module loads.
// Settings.ts holds a reference to this object, so mutating it later
// (via Object.assign in main.ts) makes values visible everywhere.
window.flatSettings = {};
window.flatappname = 'desktop.vue-scoreditor';

if (window.flatDesktopPlatform) {
  document.documentElement.dataset.platform = window.flatDesktopPlatform;
}
