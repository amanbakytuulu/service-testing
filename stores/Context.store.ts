import { createContext, useContext } from 'react';
import { RootStore } from './Root.store';

const store = RootStore.create({});

export const appStoreContext = createContext(store);

export const useAppStore = () => useContext(appStoreContext);
