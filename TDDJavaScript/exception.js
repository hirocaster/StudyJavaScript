'use strict';
try {
    console.log('1');
    // null.x;
    throw e;
    console.log('not here');
} catch (e) {
    console.log('2');
} finally {
    console.log('3');
}