
# @itsuki54/comment-remover

A tool to remove comments from TypeScript, JavaScript, JSX, and TSX files. This tool can be used both as a CLI command and as a library in your projects.

## Features

- Removes single-line comments (`//`)
- Removes multi-line comments (`/* ... */`)
- Removes HTML comments (`<!-- ... -->`) in JSX/TSX
- Supports TypeScript (`.ts`), JavaScript (`.js`), JSX (`.jsx`), and TSX (`.tsx`) files

## Installation

You can install this package globally for use in any project, or locally within your project.

### Global Installation

To install the tool globally so you can use it from anywhere:

```bash
npm install -g @itsuki54/comment-remover
```

### Local Installation

To install it as a local dependency in your project:

```bash
npm install @itsuki54/comment-remover
```

## Usage

You can use `comment-remover` as both a CLI tool and as a library in your Node.js project.

### CLI Usage

Once installed globally, you can run `comment-remover` from the command line to remove comments from files or directories.

#### Remove comments from a directory:

```bash
comment-remover ./src
```

This will recursively process all `.ts`, `.tsx`, `.js`, and `.jsx` files in the `./src` directory, removing all comments.

#### Remove comments from a single file:

```bash
comment-remover ./src/index.ts
```

This will remove comments from a single file.

### Library Usage

If you want to use this tool programmatically in your Node.js project, you can import it and call its functions directly.

#### Example:

```typescript
import { CommentRemover } from '@itsuki54/comment-remover';

const remover = new CommentRemover();
remover.remover('./src');  // Remove comments from all supported files in the `src` directory
```

## Options

Currently, `comment-remover` does not have additional configuration options. It automatically processes `.ts`, `.tsx`, `.js`, and `.jsx` files and removes comments.

## Development

If you want to modify the code or contribute, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/itsuki54/comment-remover.git
```

2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

4. Link the package for global CLI usage (for testing):

```bash
npm link
```

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Author

Created by Itsuki54.
```

### 説明

1. **Installation**: グローバルインストールとローカルインストールの両方の方法を説明しています。
2. **Usage**: CLIとして使う方法、ライブラリとして使う方法の両方を紹介しています。
3. **Options**: 将来オプションが追加された場合に簡単に拡張できるようにセクションを準備しています。
4. **Development**: 開発者向けの情報として、リポジトリをクローンしてビルドする方法を説明しています。
5. **License**: ライセンスについての情報を追加しています。
