import process from 'node:process';
import path from 'path';
import fs from 'fs';
function createNewBlog(blogName) {
  // get current file path in node
  fs.writeFileSync(
    path.join(process.cwd(), `${blogName}.md`),
    `# ${blogName}`,
    'utf8'
  )

}

createNewBlog("s");
