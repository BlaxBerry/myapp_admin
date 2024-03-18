# Admin Dashboard

## Repo Links

|                                 Repo                                  | Desc                            |                    Domain                     | Port |
| :-------------------------------------------------------------------: | ------------------------------- | :-------------------------------------------: | :--: |
|        [myapp_admin](https://github.com/BlaxBerry/myapp_admin)        | Admin Dashboard Pages           |        https://myapp-admin.vercel.app         | 3000 |
|     [myapp_protobuf](https://github.com/BlaxBerry/myapp_protobuf)     | Protocol Buffers Code Generator |                       -                       |  -   |
|  [myapp_uilib_react](https://github.com/BlaxBerry/myapp_uilib_react)  | UI Library                      | https://blaxberry.github.io/myapp_uilib_react |  -   |
|          [myapp_bff](https://github.com/BlaxBerry/myapp_bff)          | Backend for Frontend            |         https://myapp-bff.vercel.app          | 8080 |
| [myapp_scenario_api](https://github.com/BlaxBerry/myapp_scenario_api) | Scenario App's API Server       |    https://myapp-scenario-api.onrender.com    | 8000 |
|    [myapp_notes_api](https://github.com/BlaxBerry/myapp_notes_api)    | Notes App's API Server          |     https://myapp_notes_api.onrender.com      | 8400 |

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
- [react-flow]() v11
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
│   │   │   ├── types/
│   │   │   └── ...
│   │   └── ...
│   ├── assets/
│   ├── common/
│   │   ├── components/
│   │   ├── providers/
│   │   └── ...
│   ├── hooks/
│   ├── pages/
│   │   ├── [leaf].tsx
│   │   ├── [leaf]
│   │   │   ├── index.tsx
│   │   │   └── layout.tsx
│   │   └── ...
│   ├── styles/
│   ├── utils/
│   │   ├── apis/
│   │   ├── helpers/
│   │   ├── hooks/
│   │   ├── libs/
│   │   ├── router/
│   │   ├── store/
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
├── vercel.json
└── ...
```
