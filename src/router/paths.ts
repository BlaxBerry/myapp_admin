export const APP_ROUTE_SEGMENTS = {
  analysis: "analysis",
  scenario: "scenario",
  chat: "chat",
  notes: "notes",
} as const;

const analysisRoot = APP_ROUTE_SEGMENTS.analysis;
const scenarioRoot = APP_ROUTE_SEGMENTS.scenario;
const chatRoot = APP_ROUTE_SEGMENTS.chat;
const notesRoot = APP_ROUTE_SEGMENTS.notes;

export const APP_PATHS = {
  home: "/",
  analysis: {
    root: `/${analysisRoot}`,
  },
  scenario: {
    root: `/${scenarioRoot}`,
  },
  chat: {
    root: `/${chatRoot}`,
  },
  notes: {
    root: `/${notesRoot}`,
  },
} as const;
