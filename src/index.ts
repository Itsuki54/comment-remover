import { Project } from 'ts-morph';
import * as path from 'path';
import * as fs from 'fs';

export class CommentRemover {

    removeCommentsFromFile(filePath: string): void {
        const project = new Project();
        const sourceFile = project.addSourceFileAtPath(filePath);

        let fileContent = sourceFile.getFullText();

        fileContent = fileContent.replace(/^\s*\/\/.*$/gm, '');

        const withoutComments = fileContent
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/([^\\:]|^)\/\/.*$/gm, '$1');

        fs.writeFileSync(filePath, withoutComments, 'utf-8');

        const trimmedContent = withoutComments.trimEnd();
        fs.writeFileSync(filePath, trimmedContent, 'utf-8');
    }

    remover(directoryPath: string): void {
        const files = fs.readdirSync(directoryPath);

        files.forEach(file => {
            const fullPath = path.join(directoryPath, file);

            if (fs.statSync(fullPath).isDirectory()) {
                this.remover(fullPath);
            }

            else if (file.endsWith('.ts')) {
                this.removeCommentsFromFile(fullPath);
            }
        });
    }
}

const remove = new CommentRemover();

remove.remover('./src');