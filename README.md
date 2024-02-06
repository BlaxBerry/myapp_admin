# Admin Dashboard

## Repo Links

|                                 Repo                                  | Desc                       |
| :-------------------------------------------------------------------: | -------------------------- |
|        [myapp_admin](https://github.com/BlaxBerry/myapp_admin)        | Admin Dashboard Pages      |
|     [myapp_protobuf](https://github.com/BlaxBerry/myapp_protobuf)     | Protocol Buffers Generator |
|          [myapp_bff](https://github.com/BlaxBerry/myapp_bff)          | Backend for Frontend       |
| [myapp_scenario_api](https://github.com/BlaxBerry/myapp_scenario_api) | Scenario App's API Server  |
|    [myapp_notes_api](https://github.com/BlaxBerry/myapp_notes_api)    | Notes App's API Server     |

## Setup

<details>
    <summary>
       0. setup environments
    </summary>

- Node.js v18.8.0
- yarn v1

</details>

<details>
    <summary>
       1. install dependencies
    </summary>

```shell
yarn install
```

</details>

## Commands

```shell
yarn start:[mode]       # start dev server
yarn build:[mode]       # build
yarn preview            # build then run

yarn check-eslint       # check eslint rules
yarn check-prettier     # check prettier rules
yarn check-type         # check TS type
yarn format             # run prettier
yarn test               # run vitest
yarn test:ui            # run vitest using UI
```

## Tech Stacks

- [vite]() v5
- [typescript]() v5
- [swc]()
- [react]() v18
- [react-router-dom]() v6
- [react-hook-form]() v7
- react-flow
- [material ui]() v5
- storybook
- [vitest]() v1

## Project Structure

```txt
/
├── public/
│   ├── favicon.svg
│   └── ...
├── src/
│   ├── __tests__/
│   ├── apps/
│   │   ├── [APP_NAME]/
│   │   │   ├── components/
│   │   │   ├── fixtures/
│   │   │   └── ...
│   │   └── ...
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   └── ...
│   ├── pages/
│   │   ├── root.tsx
│   │   ├── [leaf].tsx
│   │   ├── [leaf]
│   │   │   ├── index.tsx
│   │   │   └── layout.tsx
│   │   └── ...
│   ├── utils/
│   │   ├── apis/
│   │   ├── hooks/
│   │   ├── router/
│   │   ├── store/
│   │   ├── helpers/
│   │   └── ...
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── .env
├── .env.[mode]
├── package.json
├── yarn.lock
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── vitest.config.ts
└── ...
```
