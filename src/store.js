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
export let token = writable("pk.eyJ1Ijoia2licmFuZHMiLCJhIjoiY2s3ZWtpbGRrMDN4YjNscW5ld29sdGN6ZCJ9.k49SYZT9PgpZfUgPIxEh1w");

$(document).ready(function() { //Hacia arriba
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200); // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });
});