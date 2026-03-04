# Safe Foundation

## Releasing a new version

The `release` branch is automatically released to `safefoundation.org`. To update the branch it is required to create a [pull request](https://github.com/safe-fndn/foundation-homepage/compare/release...main) that merges the latest changes from `main` to `release`. This PR has to be approved by a user with write access to this repo.

To trigger a re-release of the current state it is possible to trigger the release flow in the [Actions](https://github.com/safe-fndn/foundation-homepage/actions/workflows/release.yml) section of this repository. This will also be automatically triggered twice a day.

## Staging

Every push to `main` triggers a Cloudflare Pages deployment to the staging environment:

**Staging URL**: https://main.foundation-homepage.pages.dev/

Use this to verify changes before creating a release PR. Deployment status can be tracked in the [Actions tab](https://github.com/safe-fndn/foundation-homepage/actions/workflows/feature-previews.yml).

## Getting started with development

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

We use [pnpm](https://pnpm.io/) in our setup.  
Please install it globally if you don’t have it already

### Installing and running

Install dependencies for the project:

```
pnpm install
```

To launch the dev version of the app locally:

```
pnpm run dev
```

### Building

To get a complete bundle use:

```
pnpm build
```
