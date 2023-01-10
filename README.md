# Next.js 13 MDX Workaround

Since Next.js 13 using the new `app` dir, the MDX support is not ready now.

I find some discussion in community. But there is no good solution.

- [How to use @next/mdx with NextJS 13 app directory?](https://stackoverflow.com/questions/74493702/how-to-use-next-mdx-with-nextjs-13-app-directory)
- [#42882 page.mdx in app directory](https://github.com/vercel/next.js/discussions/42882)
- [#42153 (@next/mdx) Default value of providerImportSource is incompatible with app dir / React Server Components](https://github.com/vercel/next.js/issues/42153)

I think add the `page.mdx` really need wait official support. But use MDX as component is not hard.

After read the Next.js webpack config, I write this example for you to use MDX as client component.

## Start

- `npm run start`
- visit `http://localhost:3000/mdx`

## How

- for webpack
  - add `.mdx` to all `.tsx` rules
  - add mdx loader and custom `use client` loader at last (first executed) rule