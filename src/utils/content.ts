import fs from 'fs'
import path from 'path'

import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'src', 'content')

export async function getPageData(page: string) {
  // Markdown content
  const fullPath = path.join(contentDirectory, `${page}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const markdown = await remark()
    .use(html)
    .process(fileContents || '')
  const content = markdown.toString()

  // Images
  const dir = path.resolve('./public', 'images', page)
  const filenames = fs.readdirSync(dir)
  const images = filenames
    .filter((f) => f.endsWith('.jpg'))
    .map((name) => path.join('/', 'images', page, name))

  return { content, images }
}
