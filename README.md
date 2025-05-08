# Practice

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.

It has been modified for demonstration of Practice Activies for Frontend Framworks.
Joanne Hoar, May 2025

See https://code.visualstudio.com/docs/nodejs/angular-tutorial

## Environment Setup

### 1. Install official Node.js LTS from website

### 2. Open command prompt

### 3. Verify:
```bash
node -v
npm -v
```

### 4. Install angular CLI with npm
   ```bash
   npm install -g @angular/cli
   ```
   
### 5. Verify:
```bash
npm list -g --depth 0 
```

### 6. Create a project
```bash
ng new practice
```

If you're not doing git, you can use --skip-git option in project creation.
```bash
ng new --skip-git practice
```

### 7. Add to GitHub (recommended)
Open the project folder in VS Code:
```bash
cd practice
code .
```
Choose the source control tab select publish branch, authenticate your github account. 

# Activity #1

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Lint
See
https://v17.angular.io/cli/lint
And https://eslint.org/docs/latest/

```bash
ng lint
``` 
Try adding this to main.ts then run lint again.

```js
const pi = 3.14
```

## Testing

```bash
ng test
``` 

Open the file app.component.spec.ts to edit to re-run tests.

# Acivity #2
## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
