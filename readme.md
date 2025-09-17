# TypeScript 101 - SAP FullStack Development

## Option A - Manual project creation

```sh
npm init
npm install -g typescript
tsc --init
```

- create index.ts
- issue tsc (= compilation into index.js)

## Option B - Reuse this project

- clone this repo
- `npm install` in project root

## Run

Single file

`node .\index.js`

via script in packages.json

`npm run test`

single file without compilation of the whole project

`npx ts-node .\index.ts`
