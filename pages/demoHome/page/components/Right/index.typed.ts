type IFunc = (val: any) => any;
export class Props {
    public pageLan: string;
    public typeKey: string;
    public activeKey?: string | null = null;
    public onScroll?: IFunc;
}
export class State {
    public canScroll: boolean = true;
}