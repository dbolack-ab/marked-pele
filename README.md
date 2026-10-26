# marked-mermaid

This is a slight fork of MichielDeMey's marked-mermaid extension that is currently dormant. This brings the version of marked forward and pins the mermaid version for compatibility reasons for use with the [homebrewery project.](https://github.com/naturalcrit/homebrewery)

# Usage

```js
import {marked} from "marked";
import markedMermaid from "marked-mermaid";

// or UMD script
// <script src="https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/marked-mermaid/lib/index.umd.js"></script>

const options = {
	// |default options|
};

marked.use(markedMermaid(options));

marked.parse("|example markdown|");
// <p>|example html|</p>
```

