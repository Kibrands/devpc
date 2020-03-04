import { writable } from 'svelte/store';

export const jsonData = writable([]);
export const carts = writable([]);
export let visibility = writable("hidden");
export let logged = writable(false);
export let show = writable(false);
export const cartData = writable({});
export let cartCount = writable(0);
export let user = writable({});
export let loginData = writable({});
export let progress = writable(0);

$(document).ready(function(){ //Hacia arriba
  irArriba();
});

function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'100%' },2500); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(900); }else{ $('.ir-arriba').slideUp(10); }
  });
}