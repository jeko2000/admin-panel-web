import announcementService from "@/services/announcementService";
import { Announcement } from "@/types/models";
import { fold$ } from "@/util/fpUtil";
import { pipe } from "fp-ts/lib/function";
import { ActionContext, ActionTree } from "vuex";
import { RootState } from ".";
import { Mutations, MutationType } from "./mutations";


// https://soshace.com/building-web-apps-with-vue-3-composition-api-typescript-vuex4-0/
type ActionAugments = Omit<ActionContext<RootState, RootState>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}
export enum ActionType {
  LOAD_ANNOUNCEMENTS = 'LOAD_ANNOUNCEMENTS',
  CREATE_ANNOUNCEMENT = 'CREATE_ANNOUNCEMENT'
}

export type Actions = {
  [ActionType.LOAD_ANNOUNCEMENTS](ctx: ActionAugments): Promise<void>,
  [ActionType.CREATE_ANNOUNCEMENT](ctx: ActionAugments, announcement: Announcement): void
}

export const actions: ActionTree<RootState, RootState> & Actions = {
  [ActionType.LOAD_ANNOUNCEMENTS](ctx: ActionAugments): Promise<void> {
    return pipe(
      announcementService.getAll(),
      fold$(
        error => ctx.commit(MutationType.SET_ERROR, error),
        announcements => ctx.commit(MutationType.SET_ANNOUNCEMENTS, announcements)
      ),
      invoke => invoke()
    )
  },
  [ActionType.CREATE_ANNOUNCEMENT](ctx: ActionAugments, announcement: Announcement): void {
    ctx.commit(MutationType.CREATE_ANNOUNCEMENT, announcement);
  }
}
