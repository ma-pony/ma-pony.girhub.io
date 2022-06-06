import process from 'node:process';
import path from 'path';
import fs from 'fs';

const domain = 'pony.hashnode.dev';
const defaultCover = 'https://cdn.hashnode.com/res/hashnode/image/unsplash/PbzntH58GLQ/upload/v1653831013147/Tie1TT8RA.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress';

function createNewBlog(blogName) {

  const hashnodeTitle = `---
title: # TODO
subtitle: # TODO
slug: ${blogName}
tags: python3, python 

/* You can find the list of tags here https://github.com/Hashnode/support/blob/main/misc/tags.json
You need to upload your image to https://hashnode.com/uploader 
and use the uploaded image URL as COVER_IMAGE_URL */ 

cover: ${defaultCover}
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
