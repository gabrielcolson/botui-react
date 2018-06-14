# BotUI-React

React wrapper for BotUI API (botui.org)

## Getting Started

### Installing

You can download the package from npm using npm or yarn

```
npm i botui-react
yarn add botui-react
```

### Usage

Link Vue.js and the BotUI script in your HTML file.

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.5/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/botui/build/botui.js"></script>
```

Import the component into your project.

```
import Botui from 'botui-react';
```

Instantiate it in your jsx.

```
<Botui ref={ cmp => this.botui = cmp } />
```

Create a conversation.

```
componentWillMount() {
    this.botui.message.bot({
        content: "Hello World",
        delay: 1000
    });
    this.botui.action.text({
        action: {
            placeholder: "Enter your text here"
        }
    });
}
```

For more examples, you can refer to the BotUI documentation : docs.botui.org

## License

This project is licensed under the MIT License