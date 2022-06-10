import process from 'node:process';
import path from 'path';
import fs from 'fs';

const domain = 'pony.hashnode.dev';
const defaultCovers = [
  'https://cdn.hashnode.com/res/hashnode/image/unsplash/PbzntH58GLQ/upload/v1653831013147/Tie1TT8RA.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress',
  'https://cdn.hashnode.com/res/hashnode/image/upload/v1654873507223/OlEYD5trN.jpeg?auto=compress',
  'https://cdn.hashnode.com/res/hashnode/image/upload/v1654873553830/Lr3zj-rih.jpeg?auto=compress',
  'https://cdn.hashnode.com/res/hashnode/image/upload/v1654873577116/8DzikMhsh.jpeg?auto=compress',
  'https://cdn.hashnode.com/res/hashnode/image/upload/v1654873600499/l9i6Uuso-.jpeg?auto=compress',
  'https://cdn.hashnode.com/res/hashnode/image/upload/v1654873621280/aSGCccfeR.jpeg?auto=compress',
  'https://cdn.hashnode.com/res/hashnode/image/upload/v1654873645238/7TFlE4Q8N.jpeg?auto=compress',
  'https://cdn.hashnode.com/res/hashnode/image/upload/v1654873665590/Ml999NBdk.jpeg?auto=compress',
  'https://cdn.hashnode.com/res/hashnode/image/upload/v1654873687009/QnGc5YbhO.jpeg?auto=compress',
];
const random = Math.floor(Math.random() * defaultCovers.length);
function createNewBlog(blogName) {

  const hashnodeTitle = `---
title: # TODO
// title 必须是英文
subtitle: # TODO
slug: ${blogName}
tags: python3, python 

/* You can find the list of tags here https://github.com/Hashnode/support/blob/main/misc/tags.json
You need to upload your image to https://hashnode.com/uploader 
and use the uploaded image URL as COVER_IMAGE_URL */ 

cover: ${defaultCovers[random]}
domain: ${domain}
---

`;

  // get current file path in node
  fs.writeFileSync(
    path.join(process.cwd(), `${blogName}.md`),
    `${hashnodeTitle}`,
    'utf8'
  )

}

const args = process.argv.slice(2)
createNewBlog(args[0]);
