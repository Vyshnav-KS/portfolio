import { a as makeExports } from './chunk-febce46b.js';
import 'string-hash';
import 'asap';

/* @flow */
var useImportant = false; // Don't add !important to style definitions

var Aphrodite = makeExports(useImportant);
var StyleSheet = Aphrodite.StyleSheet,
    StyleSheetServer = Aphrodite.StyleSheetServer,
    StyleSheetTestUtils = Aphrodite.StyleSheetTestUtils,
    css = Aphrodite.css,
    minify = Aphrodite.minify,
    flushToStyleTag = Aphrodite.flushToStyleTag,
    injectAndGetClassName = Aphrodite.injectAndGetClassName,
    defaultSelectorHandlers = Aphrodite.defaultSelectorHandlers,
    reset = Aphrodite.reset,
    resetInjectedStyle = Aphrodite.resetInjectedStyle;

export { StyleSheet, StyleSheetServer, StyleSheetTestUtils, css, minify, flushToStyleTag, injectAndGetClassName, defaultSelectorHandlers, reset, resetInjectedStyle };
