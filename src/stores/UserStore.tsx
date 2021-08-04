import { action, observable } from "mobx";

export class UserStore {
    @observable email = '';

    @action.bound
    setEmail(email: string): void {
        this.email = email;
    }
}