import { html } from "lit-html";

import "./test-button";

const kind = ["primary", "secondary"];

export default {
  title: "Button",
  component: "test-button",
  argTypes: {
    kind: { control: { type: 'select', options: kind }},
  }
}; 


const onButtonClick = (props) => {
  console.log("called from HTML");
  console.log(props);
};

const Template = ({kind, name, content, disabled, onClick}) => {
  return html`
    <test-button 
      .kind="${kind}"
      .name="${name}"
      ?disabled=${disabled}
      @onClick="${onClick}">
      ${content}
    </test-button>`
};

export const Text = Template.bind({});
Text.args = {
  kind: "primary",
  name: "Submit",
  content: "Hello",
  disabled: false,
  onClick: onButtonClick,
}


