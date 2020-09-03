import { html } from "lit-html";

import "./decorators-button";

const kind = ["primary", "secondary"];

export default {
  title: "Decorators Button",
  component: "decorators-button",
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
    <decorators-button 
      .kind="${kind}"
      .name="${name}"
      ?disabled=${disabled}
      @onClick="${onClick}">
      ${content}
    </decorators-button>`
};

export const Text = Template.bind({});
Text.args = {
  kind: "primary",
  name: "Submit",
  content: "Hello",
  disabled: false,
  onClick: onButtonClick,
}


