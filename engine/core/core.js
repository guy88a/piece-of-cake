/*
============================== CORE =================================
---------------------------------------------------------------------
Main Object (POG & pog) Initiator
Version: 0.01.100
---------------------------------------------------------------------
=====================================================================
*/

/* IMPORTS ==========================================================
    - Initiators
=====================================================================
*/
import DomUtil from './u_dom.js';

/* SETTINGS =========================================================
    - Main variables
    - Default variables
=====================================================================
*/
let defaultPogObject = {
    DOM: {},
    Scene: {},
    Context: {},
    Configurations: {}
}

var POG = POG || pog || InitiateCore();

/* FUNCTION =========================================================
    - Core initiator
=====================================================================
*/
/**
 * InitiateCore
 * construct the main game object - POG
 */
function InitiateCore() {
    // user try for handling dom exception
    // if fails, returns a default game object
    try {
        // get all main inner objects
        let dom_util     = DomUtil();
        let scene_util   = {};
        let context_util = {};
        let config_util  = {};
    
        // return constructed game object
        return {
            DOM: dom_util,
            Scene: scene_util,
            Context: context_util,
            Configurations: config_util,
        }
    } catch(e) {
        // return default game object
        return defaultPogObject;
    }
}