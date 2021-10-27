## Notes
- The site is built with Create React App.
- BTW, it's not so easy to customize the Webpack configuration when you're using CRA. You either have to `eject`, or use 3rd party tools (`craco`, `react-app-rewired` etc).
- How do I know this? Well, I was going to use a couple of Webpack plugins to automate the image resizing/srcset generation...
- So I added a little bash script to batch-resize images with imagemagick, and created srcsets manually. This will do for now.

- Dealt with CSS variables for the first time. They can't be used in media queries.

- Had some issues with importing a .ttf font in the code. The problem is, unlike .woff font, it can't be imported as `import X from some_path`, only as `import some_path`. As a result, we can't refer to the path in `@font-face`.
- Anyway, I decided to import it in the index.html with `rel="preload"` and used `font-display: optional` in the CSS -- this way there's no flashing of system font whatsoever.
