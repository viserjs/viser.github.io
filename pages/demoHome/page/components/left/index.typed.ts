type IFunc = (val: any) => any;
export class Props {
    public pageLan: string;
    public typeKey: string;
    public activeKey?: string | null = null;
    public onClick?: IFunc;
}
export class State {}