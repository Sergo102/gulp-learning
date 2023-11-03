"use strict";

console.log('hello');
var darkModePreference = null;
var getUserDarkModePreference = function getUserDarkModePreference(darkModePreference) {
  return darkModePreference !== null && darkModePreference !== void 0 ? darkModePreference : true;
};