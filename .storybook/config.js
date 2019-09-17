import { configure, addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../src/App.css";
import 'storybook-chroma';

addParameters({
  options: {
    theme: themes.light
  }
});

const req = require.context("../src", true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
