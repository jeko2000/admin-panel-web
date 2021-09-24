import { Announcement } from "@/types/models";
import { GetterTree } from "vuex";
import { RootState } from ".";

export type Getters = {
  formattedError(state: RootState): string
  getTaskById(state: RootState): (announcementId: string) => Announcement | undefined
  totalAnnouncementCount(state: RootState): number
}

export const getters: GetterTree<RootState, RootState> & Getters = {
  formattedError(state: RootState): string {
    return "!!" + (state.error ? state.error.message : '');
  },
  getTaskById(state: RootState): (announcementId: string) => Announcement | undefined {
    return (announcementId) => state.announcements.find(a => a.id === announcementId);
  },
  totalAnnouncementCount(state: RootState): number {
    return state.announcements.length;
  }
}

export default getters;
