import {
  useDispatch as useDispatchWithoutTS,
  useSelector as useSelectorWithoutTS,
  type TypedUseSelectorHook,
} from "react-redux";

import type { store } from "./store";

type StoreState = ReturnType<typeof store.getState>;
type StoreDispatch = typeof store.dispatch;

export type UseDispatchHook = () => StoreDispatch;
export type UseSelectorHook = TypedUseSelectorHook<StoreState>;

export const useDispatch: UseDispatchHook = useDispatchWithoutTS;
export const useSelector: UseSelectorHook = useSelectorWithoutTS;
