import { html } from "lit-html";

import "./non-decorators-button";

const kind = ["primary", "secondary"];

export default {
  title: "Non Decorators Button",
  component: "non-decorators-button",
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
    <non-decorators-button 
      .kind="${kind}"
      .name="${name}"
      ?disabled=${disabled}
      @onClick="${onClick}">
      ${content}
    </non-decorators-button>`
};

export const Text = Template.bind({});
Text.args = {
  kind: "primary",
  name: "Submit",
  content: "Hello",
  disabled: false,
  onClick: onButtonClick,
}


