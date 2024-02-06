import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/__tests__/**/*.test.{ts,js}"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
    ],

    reporters: ["default"],
    outputFile: {
      junit: "src/__tests__/report/vitest_junit_report.xml",
    },

    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["html"],
      reportsDirectory: "src/__tests__/coverage",
    },
  },
});
