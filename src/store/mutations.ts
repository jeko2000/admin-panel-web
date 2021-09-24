import { Announcement } from "@/types/models";
import { MutationTree } from "vuex";
import { RootState } from ".";

export enum MutationType {
  SET_VERSION = 'SET_VERSION',
  SET_ANNOUNCEMENTS = 'SET_ANNOUNCEMENTS',
  CREATE_ANNOUNCEMENT = 'CREATE_ANNOUNCEMENT',
  SET_ERROR = 'SET_ERROR'
}

export type Mutations = {
  [MutationType.SET_VERSION](state: RootState, version: string): void

  [MutationType.SET_ANNOUNCEMENTS](state: RootState, announcements: Announcement[]): void,
  [MutationType.CREATE_ANNOUNCEMENT](state: RootState, announcement: Announcement): void,
  [MutationType.SET_ERROR](state: RootState, error: Error): void
}

export const mutations: MutationTree<RootState> & Mutations = {
  [MutationType.SET_VERSION](state: RootState, version: string) {
    state.version = version;
  },
  [MutationType.SET_ANNOUNCEMENTS](state: RootState, announcements: Announcement[]): void {
    state.announcements = announcements;
  },
  [MutationType.CREATE_ANNOUNCEMENT](state: RootState, announcement: Announcement): void {
    state.announcements.unshift(announcement);
  },
  [MutationType.SET_ERROR](state: RootState, error: Error): void {
    state.error = error
  }
}

export default mutations;
