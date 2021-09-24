import { Announcement } from '@/types/models';
import { CommitOptions, createStore, DispatchOptions, Store as VuexStore } from 'vuex';
import { Actions, actions } from './actions';
import { Getters, getters } from './getters';
import { Mutations, mutations } from './mutations';

export interface RootState {
  version: string,
  announcements: Announcement[],
  error: Error | null
}

const initialState: RootState = {
    version: "1.0.0",
    announcements: [],
    error: null
}

export const store = createStore<RootState>({
  state: initialState,
  getters,
  actions,
  mutations,
  devtools: true
});

// Override default Store type to add strong typing
// source: https://soshace.com/building-web-apps-with-vue-3-composition-api-typescript-vuex4-0/
export type Store<T> = Omit<
  VuexStore<T>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  };
}

export function useStore(): Store<RootState> {
  return store;
}
