import { spawn } from 'node:child_process'
import { dirname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { AstroIntegration } from 'astro'

export function pagefindConfig(): AstroIntegration {
  return {
    name: 'pagefind',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const targetDir = fileURLToPath(dir)
        const cwd = dirname(fileURLToPath(import.meta.url))
        // const relativeDir = relative(cwd, targetDir)
        const absoluteDir = targetDir.replace(/\\/g, '/')

        console.log('Current Working Directory:', cwd)
        console.log('Target Directory:', targetDir)
        // console.log('Relative Directory:', relativeDir)
        console.log('Absolute Directory for Site:', absoluteDir)
        console.log('Output Directory for Pagefind:', `${targetDir}/pagefind`)
        if (!absoluteDir || !targetDir) {
          throw new Error('Invalid paths detected. Please check the build directories.')
        }

        return new Promise<void>((resolve) => {
          spawn(
            'npx',
            ['-y', 'pagefind', '--site', absoluteDir, '--output-path', `${targetDir}/pagefind`],
            {
              stdio: 'inherit',
              shell: true,
              cwd
            }
          ).on('close', () => resolve())
        })
      }
    }
  }
}
