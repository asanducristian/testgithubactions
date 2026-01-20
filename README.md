# Node GitHub Actions Playground

A TypeScript project with automated code quality enforcement.

## Code Quality Standards

### Formatting

**Use Prettier. Formatting is enforced on commit and CI.**

- Formatting rules are defined in `.prettierrc`
- Code is automatically formatted on commit via Husky pre-commit hooks
- CI will fail if code is not properly formatted

### Linting

ESLint is configured for TypeScript and runs automatically:

- On commit (via Husky pre-commit hooks)
- In CI/CD pipeline

## Available Scripts

- `npm run dev` - Run the application in development mode
- `npm run build` - Build the TypeScript project
- `npm start` - Run the compiled application
- `npm test` - Run tests
- `npm run lint` - Run ESLint on the entire project
- `npm run format:check` - Check if all files are properly formatted
- `npm run format:write` - Format all files with Prettier

## Development Workflow

1. Make your changes
2. Stage your files with `git add`
3. Commit your changes with `git commit`
   - Prettier will automatically format staged files
   - ESLint will check for code quality issues
   - Commit will be blocked if ESLint fails or warnings are present
4. Push your changes - CI will verify formatting and linting

## Pre-commit Hooks

This project uses Husky + lint-staged to enforce code quality before commits:

- **Prettier**: Auto-formats all staged files
- **ESLint**: Lints staged files with `--max-warnings=0` (no warnings allowed)

If you need to bypass hooks (not recommended), use `git commit --no-verify`.

## CI/CD Pipeline

The CI pipeline runs:

1. `npm run format:check` - Ensures all code is formatted
2. `npm run lint` - Ensures code passes ESLint
3. `npm test` - Runs tests
4. `npm run build` - Verifies the project builds successfully

This prevents bypassing local pre-commit hooks.
