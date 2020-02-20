import { writable } from 'svelte/store';

export const jsonData = writable([]);
export let visibility = writable("hidden");
export let logged = writable(false);
export let user = writable({});
export let loginData = writable({});