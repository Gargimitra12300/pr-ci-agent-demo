# PR CI Agent Demo

A simple Node.js project used to demonstrate Otto Agent Harness workflows for automated PR testing and failure analysis.

## Structure

```
src/
  calculator.js      - Math utility functions
  stringUtils.js     - String manipulation functions
tests/
  calculator.test.js - Calculator test suite
  stringUtils.test.js - String utils test suite
```

## Running Tests

```bash
npm test
```

## How It Works

When a PR is created against this repo, an Otto workflow triggers an AI agent that:
1. Clones the PR branch
2. Runs the test suite
3. If tests fail, analyzes the failures and posts a summary as a PR comment
