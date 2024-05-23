import { writable } from "svelte/store";
import { ULID } from "../utils";

let now = new Date().toISOString().substring(11, 16);

const messageStore = writable([
]);

export default messageStore;