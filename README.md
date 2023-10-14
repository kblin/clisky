# clisky

A quick-and-dirty command line tool to post to Bluesky.


## Setup

This project is using [Bun](https://bun.sh) as its JavaScript runtime, but
other TypeScript-aware runtimes should work as well.

To install dependencies:

```bash
bun install
```

Then, create a `.env` file containing your Bluesky username and a corresponding app password.

```
BLUESKY_USERNAME=exampleuser.bsky.social
BLUESKY_PASSWORD=super-secret-app-password
```

Finally, run

```bash
bun run index.ts "Your post to Bluesky here"
```
to make your post. `@mentions` and `https://web.links` will automatically be recognised.

## Licence

All code is available under the Apache License version 2, see the
[`LICENSE`](LICENSE) file for details.
