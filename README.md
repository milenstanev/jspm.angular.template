# jspm.angular.template

This package is the starter template for creating new AngularJS features/modules.

## Purpose

- Provide a small, working baseline module structure.
- Help teams scaffold new features with consistent layout and module conventions.
- Keep feature code isolated (`src/home/*`) so additional features can be added by copy/adapt.

## What to keep when creating a new feature

- A feature module file (for example `src/home/app.home.js`).
- A controller file (for example `src/home/app.homeCtrl.js`).
- A template file (for example `src/home/app.home.html`).
- Registration in `src/index.js` so the feature is added to the root app module.

## Testing support package

`testModule` is installed as a JSPM dependency for feature-level testing integration:

- Package: `milenstanev/jspm.angular.test-module@master`
- Config alias: `testModule`

The package is intentionally not exposed as a navigation route in production apps.

## Example unit test

Run:

```bash
npm test
```

This runs `tests/unit.example.test.js`, a minimal sanity test that verifies:

- `testModule` is present in JSPM dependencies.
- The feature module exports `app.home`.
- The root app module includes the feature module.
