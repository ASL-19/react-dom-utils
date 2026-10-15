# @asl-19/react-dom-utils changelog

## Unreleased

- `useDynamicFocusOutlines`: Show focus outlines when pressing Tab in a text field, so focus moving out of a field that was clicked into is visible; also treat `contenteditable` elements as text fields
- `useDynamicFocusOutlines`: Add and remove the `focusOutlinesHidden` class with `classList`, so it’s no longer added twice if the `html` element’s `class` attribute starts with it
- `useOnClickOutside`: Type `handler` as `(options: { event: MouseEvent }) => void` instead of `CallableFunction`. Handlers whose parameter types don’t match will no longer type check
- `useOnClickOutside`: Accept `RefObject<HTMLElement | null>`, so refs created with React 19’s `useRef<HTMLElement>(null)` type check
- `useFormStateAndFocusManagement`: Fix `FormState` import in type declarations missing its `.js` extension, which broke type resolution for consumers using `moduleResolution: "nodenext"`
- Update @asl-19/js-dom-utils to 1.1.0
- Widen `react` and `react-dom` peer dependency ranges to `^19.0.0`
- Add parameter descriptions to `useOnClickOutside` and `useFormStateAndFocusManagement` type declarations

Development tooling:

- Replace API Extractor and API Documenter with TypeDoc
- Add Vitest tests (happy-dom, React Testing Library) for each hook, replacing the unused Jest setup
- Remove package-changed and npm-check-updates, and add `outdated` scripts
- Add publint and a docs freshness check to `lint-test`
- Manage Node.js 24 and pinact with mise
- Add npm supply-chain gates (`.npmrc`, `devEngines`, `allowScripts`)
- Update TypeScript to 6.0, ESLint to 10, @asl-19/eslint-config to 1.0 and Prettier to 3.9, and compile with `module: "nodenext"`
- Pin GitHub Actions to commit SHAs, limit the workflow token to read-only, and run CI on pull requests
- Add agent instructions (`AGENTS.md`) and Claude Code permission settings

## [1.1.0](https://github.com/ASL-19/react-dom-utils/pulls?q=is%3Apr+milestone%3A1.1.0) [2025-08-15]

- Migrate to ESM [[#6](https://github.com/ASL-19/react-dom-utils/pull/6)]
- Update dependencies [[#8](https://github.com/ASL-19/react-dom-utils/pull/8)]

## [1.0.0](https://github.com/ASL-19/react-dom-utils/pulls?q=is%3Apr+milestone%3A1.0.0) [2024-09-12]

### Additions

- Added new hooks: `useAddHydratedClassName`, `useFocusElementAfterRender`, `useOnClickOutside`, and `useDynamicFocusOutlines` [[#5](https://github.com/ASL-19/react-dom-utils/pull/5)]

## [0.1.1](https://github.com/ASL-19/react-dom-utils/pulls?q=is%3Apr+milestone%3A0.1.1) [2021-07-09]

### Changes

- Remove @public TSDoc tags [[#2](https://github.com/ASL-19/react-dom-utils/pull/2)]

## 0.1.0 [2021-07-09]

First release
