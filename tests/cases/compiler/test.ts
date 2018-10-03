class Getter { get x() { return 1; } }
class Setter extends Getter { set x(v: number) { } }

class RO { readonly z: number; }
class RW extends RO { z: number; }

const b: Setter = new Getter();
const w: RW = new RO();

var x: string | string[];
if (x instanceof Array) {
    x.push('')
} else {
    x.substring(1, 1);
}
