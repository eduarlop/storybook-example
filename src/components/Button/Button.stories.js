import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

storiesOf("Button", module)
  .addDecorator(story => <div className="storybook-body">{story()}</div>)
  .add("default", () => (
    <Button onClick={action("clicked")}>Add to Cart</Button>
  ))
  .add("default with icon", () => (
    <Button icon="shopping-cart" onClick={action("clicked")}>
      Add to Cart
    </Button>
  ))
  .add("default disabled", () => (
    <Button icon="shopping-cart" onClick={action("clicked")} disabled>
      Add to Cart
    </Button>
  ))
  .add("primary", () => (
    <Button className="primary" onClick={action("clicked")}>
      Add to Cart
    </Button>
  ))
  .add("primary with icon", () => (
    <Button
      className="primary"
      icon="shopping-cart"
      onClick={action("clicked")}
    >
      Add to Cart
    </Button>
  ))
  .add("primary disabled", () => (
    <Button
      className="primary"
      icon="shopping-cart"
      onClick={action("clicked")}
      disabled
    >
      Add to Cart
    </Button>
  ))
  .add("secondary", () => (
    <Button className="secondary" onClick={action("clicked")}>
      Add to Cart
    </Button>
  ))
  .add("secondary with icon", () => (
    <Button
      className="secondary"
      icon="shopping-cart"
      onClick={action("clicked")}
    >
      Add to Cart
    </Button>
  ))
  .add("secondary disabled", () => (
    <Button
      className="secondary"
      icon="shopping-cart"
      onClick={action("clicked")}
      disabled
    >
      Add to Cart
    </Button>
  ))
  .add("tertiary", () => (
    <Button className="tertiary" onClick={action("clicked")}>
      Add to Cart
    </Button>
  ))
  .add("tertiary with icon", () => (
    <Button
      className="tertiary"
      icon="shopping-cart"
      onClick={action("clicked")}
    >
      Add to Cart
    </Button>
  ))
  .add("tertiary disabled", () => (
    <Button
      className="tertiary"
      icon="shopping-cart"
      onClick={action("clicked")}
      disabled
    >
      Add to Cart
    </Button>
  ));
