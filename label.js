'use strict';
outer_loop:
while (true) {
    console.log('outer loop');
    while (true) {
        console.log('inner loop');
        break outer_loop;
    }
}