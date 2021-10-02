import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootSate } from '../store';
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
