# CLAUDE.md

Guidance for AI assistants (Claude Code and others) working in this repository.

> **Status: Scaffold.** This repository is currently empty — no application code
> has been committed yet. The sections below are placeholders to be filled in as
> the project takes shape. When you add real code, replace the `TODO` markers
> with accurate, verified details. Do **not** leave invented file paths, commands,
> or conventions in this file — everything here should be checkable against the
> actual codebase.

## Project Overview

**Aireceptionist** — _TODO: one-paragraph description of what this project does,
who it's for, and the core problem it solves (e.g., an AI-powered virtual
receptionist that handles inbound calls/messages, scheduling, and routing)._

- **Primary language / runtime:** _TODO_
- **Frameworks / key libraries:** _TODO_
- **External services / integrations:** _TODO (e.g., telephony, calendar, email, LLM provider)_

## Repository Structure

_TODO: Document the directory layout once code exists. Example shape:_

```
.
├── src/            # application source
├── tests/          # automated tests
├── docs/           # documentation
└── ...
```

## Getting Started

_TODO: Fill in once the toolchain is chosen._

```bash
# Install dependencies
# TODO

# Configure environment (copy and edit env template)
# TODO

# Run locally
# TODO
```

### Environment / Configuration

_TODO: List required environment variables and secrets (names only — never commit
secret values). Reference a `.env.example` file if one is added._

## Development Workflows

### Build

```bash
# TODO
```

### Run / Dev server

```bash
# TODO
```

### Test

```bash
# TODO — command to run the full test suite, and how to run a single test
```

### Lint / Format / Typecheck

```bash
# TODO — run these before committing
```

## Conventions

- **Code style:** _TODO (formatter/linter config that is the source of truth)._
- **Naming:** _TODO._
- **Commits:** _TODO (e.g., Conventional Commits)._
- **Branching:** Feature work happens on dedicated branches; open a PR for review.
  Do not push directly to the default branch.
- **Tests:** _TODO (expectations for new code — coverage, where tests live)._

## Notes for AI Assistants

- Prefer the project's own tooling (scripts, Makefile, package manager) over ad-hoc commands.
- Run the lint/format/test commands above before committing once they exist.
- Never commit secrets or credentials. Keep real config values out of version control.
- Keep this file current: when you change structure, commands, or conventions,
  update the relevant section in the same change.
