/*
=========================== UTIL | DOM ==============================
---------------------------------------------------------------------
Document Model Object handler
Version: 0.01.100
---------------------------------------------------------------------
=====================================================================
*/

/* SETTINGS =========================================================
    - Main variables
=====================================================================
*/
let main_global = typeof self == 'object'   && self.self === self       && self   ||
                  typeof global == 'object' && global.global === global && global ||
                  { i: 'Could not locate global' };


/* FUNCTIONS ========================================================
    - DOM elements getters
=====================================================================
*/
function getCanvasElement(selector = 'canvas') {
    return main_global instanceof HTMLElement ?
        main_global.querySelector(selector) :
        {};
}

/* EXPORT ===========================================================
    - Default
=====================================================================
*/
export default function DomUtil(canvasSelector = '') {
    return {
        global: main_global,
        canvas: getCanvasElement(canvasSelector),
    }
}