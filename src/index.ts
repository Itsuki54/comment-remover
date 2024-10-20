#!/usr/bin/env node

import * as path from 'path';
import * as fs from 'fs';

export class CommentRemover {

    private supportedExtensions = ['.ts', '.tsx', '.js', '.jsx'];

    removeCommentsFromFile(filePath: string): void {
        let fileContent = fs.readFileSync(filePath, 'utf-8');

        fileContent = fileContent.replace(/^\s*\/\/.*$/gm, '');

        const withoutComments = fileContent
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/<!--[\s\S]*?-->/g, '')
            .replace(/([^\\:]|^)\/\/.*$/gm, '$1');

        fs.writeFileSync(filePath, withoutComments, 'utf-8');

        const trimmedContent = withoutComments.trimEnd();
        fs.writeFileSync(filePath, trimmedContent, 'utf-8');
    }

    remover(directoryPath: string): void {
        const files = fs.readdirSync(directoryPath);

        files.forEach(file => {
            const fullPath = path.join(directoryPath, file);

            if (file === 'node_modules') {
                return;
            }

            if (fs.statSync(fullPath).isDirectory()) {
                this.remover(fullPath);
            } else {

                const ext = path.extname(file);
                if (this.supportedExtensions.includes(ext)) {
                    this.removeCommentsFromFile(fullPath);
                }
            }
        });
    }

    removeCommentsFromAllFiles(): void {
        this.remover(process.cwd());
    }
}

const args = process.argv.slice(2);

const remover = new CommentRemover();

if (args.length === 0) {
    console.log('No path provided. Removing comments from all files in the current directory...');
    remover.removeCommentsFromAllFiles();
    process.exit(0);
}

const targetPath = args[0];

if (fs.existsSync(targetPath)) {
    const stat = fs.statSync(targetPath);

    if (stat.isDirectory()) {
        remover.remover(targetPath);
    } else if (stat.isFile() && ['.ts', '.tsx', '.js', '.jsx'].includes(path.extname(targetPath))) {
        remover.removeCommentsFromFile(targetPath);
    } else {
        console.error('Please provide a valid TypeScript, JavaScript, or JSX/TSX file or directory.');
    }
} else {
    console.error('Path does not exist.');
    process.exit(1);
}