// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require.context("../images", true)
require("jquery")

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import "bootstrap"
import "@popperjs/core"
import "@fortawesome/fontawesome-free/js/all";
import "../src/my_script.js"

Rails.start()
Turbolinks.start()
ActiveStorage.start()
