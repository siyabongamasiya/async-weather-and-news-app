# Async Weather & News Dashboard

## Project Overview

The Async Weather & News Dashboard demonstrates asynchronous programming in Node.js using **Callbacks**, **Promises**, and **Async/Await**. This project fetches weather data from the Open-Meteo API and news posts from the DummyJSON API. It showcases different asynchronous patterns, including `Promise.all()` and `Promise.race()`.

## Features

- Fetch current weather for Johannesburg, South Africa
- Fetch latest news posts
- Implement three asynchronous styles:
  - **Callback-based**
  - **Promise-based**
  - **Async/Await**
- Demonstrate parallel requests with `Promise.all()` and fastest response with `Promise.race()`
- Proper error handling for all request types

## Installation

1. Clone the repository:

```bash
git clone https://github.com/siyabongamasiya/async-weather-and-news-app
cd async-weather-and-news-app
```

2. Install dependencies:

```bash
npm install
```

## Scripts

Run development script (TypeScript compilation + execution):

```bash
npm run dev
```

This watches for changes in the `src` folder, compiles TypeScript files, and runs the main script.

## Project Structure

```
async-weather-and-news-app/
│
├─ src/
│  ├─ asyncAwaitVersion.ts      # Async/Await implementation
│  ├─ callBackVersion.ts        # Callback implementation
│  ├─ promiseVersion.ts         # Promise implementation
│  ├─ common.ts                 # Main script orchestrating all examples
│
├─ package.json
├─ tsconfig.json
└─ README.md
```

## Usage

### 1. Callback Example

Demonstrates nested callbacks:

```ts
callbackExample();
```

**Console output:**

```
[CALLBACK] Starting callback example...
[CALLBACK] Weather fetched successfully.
[CALLBACK] News fetched successfully.
[CALLBACK] Both requests completed via nested callbacks!
```

### 2. Promise Example

Demonstrates promise chaining and parallel execution:

```ts
promiseExample();
```

**Console output:**

```
[PROMISE] Starting promise example...
[PROMISE] Weather fetched successfully.
[PROMISE] News fetched successfully.
[PROMISE] Both requests completed with Promise chaining!
[PROMISE] Promise.all(): Both requests done together.
[PROMISE] Promise.race(): Fastest request completed.
```

### 3. Async/Await Example

Demonstrates sequential execution, `Promise.all()`, and `Promise.race()`:

```ts
asyncAwaitExample();
```

**Console output:**

```
[ASYNC/AWAIT] Starting async/await example...
[ASYNC/AWAIT] Weather fetched successfully.
[ASYNC/AWAIT] News fetched successfully.
[ASYNC/AWAIT] Both requests completed sequentially!
[ASYNC/AWAIT] Promise.all(): Both requests done together!
[ASYNC/AWAIT] Promise.race(): Fastest response received!
```

## APIs Used

### Weather API: Open-Meteo
- **URL:** `https://api.open-meteo.com/v1/forecast?latitude=-26.2041&longitude=28.0473&current_weather=true`

### News API: DummyJSON
- **URL:** `https://dummyjson.com/posts`

## Key Learning Points

- Understanding the JavaScript event loop and asynchronous behavior
- Implementing and handling callbacks
- Chaining and combining Promises
- Using async/await for cleaner asynchronous code
- Running parallel requests with `Promise.all()` and `Promise.race()`
- Handling errors consistently across all asynchronous patterns

## Notes

- Ensure you have Node.js installed (v18+ recommended)
- The project uses TypeScript for type safety
- Errors are logged in the console with descriptive messages for each method
- You can toggle which example runs by uncommenting the corresponding function call in `common.ts`