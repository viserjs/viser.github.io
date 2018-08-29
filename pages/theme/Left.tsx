import * as React from 'react';
import TabSld from './Components/Tabsld';
import { getTransText } from './translation';
class Left extends React.Component<any, any> {
    render() {
        return <div className="theme-left theme-pannel">
            <TabSld title={getTransText('', this.props.pageLan)} visible={true} />
            <TabSld title="cxfassdf" />
            <TabSld title="cxfassdf" />
            <TabSld title="cxfassdf" />
            <TabSld title="cxfassdf" />
            <TabSld title="cxfassdf" />
        </div>
    }
}
export default Left;