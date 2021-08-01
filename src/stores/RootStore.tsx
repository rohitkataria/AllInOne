import { UserStore } from "./UserStore";

export class RootStore {
  public userStore: UserStore;

  constructor() {
    this.userStore = new UserStore();
  }
}
