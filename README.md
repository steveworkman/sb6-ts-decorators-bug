This repo shows a bug in storybook that the shadow root is not updated when a control is changed in Storybook 6.

This works fine when the `static properties` method is used, but does not work when the typescript decorators are used.