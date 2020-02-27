export class Props {
    public pageLan: string;
    public typeKey: string;
}
export class State {
    public height: number = window.innerHeight - 60;//容器高度
    public activeKey: string | null = null;
}