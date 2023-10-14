import { BskyAgent, RichText } from '@atproto/api';
import * as dotenv from 'dotenv';

if (Bun.argv.length < 3) {
    console.error('Usage: bun run index.ts "Message to post"');
    process.exit(2);
}

dotenv.config();

const agent = new BskyAgent({ service: "https://bsky.social"});

await agent.login({
    identifier: process.env.BLUESKY_USERNAME!,
    password: process.env.BLUESKY_PASSWORD!,
});

const text = Bun.argv[2];

const rt = new RichText({
    text: text,
});

await rt.detectFacets(agent);

const post = {
    $type: "app.bsky.feed.post",
    text: rt.text,
    facets: rt.facets,
    createdAt: new Date().toISOString(),
};

console.log(`Posting "${text}"`);
const response = await agent.post(post);
console.log(response);
