# marked-pele

Use Mermaid style diagrams via pele.run

# Usage

```js
import {marked} from "marked";
import markedPele from "marked-pele";

const peleOptions = { langs: ['pele'] };

marked.use(markedPele(peleOptions));

marked.parse(```pele
block
  blockArrowId<["Label"]>(right)
  blockArrowId2<["Label"]>(left)
  blockArrowId3<["Label"]>(up)
  blockArrowId4<["Label"]>(down)
  blockArrowId5<["Label"]>(x)
  blockArrowId6<["Label"]>(y)
  blockArrowId7<["Label"]>(x, down)
```);

```

