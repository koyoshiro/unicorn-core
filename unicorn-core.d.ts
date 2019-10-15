declare module '@vanir/unicorn-core' {
    export class Observable {
        constructor(object: any);
    }

    export class Watcher {
        constructor(obj: any, field: string, cb: () => void, computedUpdate: (val: any) => void);
    }
}
