define("m", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hi = void 0;
    function hi() {
        console.log('hi');
    }
    exports.hi = hi;
    let b = 20;
    let c = 'hello';
    console.log(b, c);
});
define("app", ["require", "exports", "m"], function (require, exports, m_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let a = 10;
    console.log(m_js_1.hi);
    // document.getElementById('test') 
    console.log(a);
});
let i = 0;
let j = 1;
