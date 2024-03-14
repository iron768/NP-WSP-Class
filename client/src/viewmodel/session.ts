import { type User } from "@/data/users";
import { reactive } from "vue";

const session = reactive({
    user: null as User | null,
})

export function getSession(){
    return session;
}