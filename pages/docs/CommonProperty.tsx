import * as React from 'react';

interface IPropItem {
  title: string,
  type?: string,
  optional?: boolean,
  desc: string,
  default: string,
}

interface Props {
  properties: IPropItem[],
}

export default class Property extends React.Component<Props, any> {
  render() {
    return (
      <div className="prop-list">
        {
          (this.props.properties || []).map((propItem: IPropItem, i) => {
            const { title, type, optional, desc } = propItem;
            return (
              <div className="prop-item" key={`prop-item-${i}`}>
                <p className="prop-header">
                  <span className="prop-title">{title}</span>
                  {type && <span className="prop-type">{type}</span>}
                  {optional && <em className="prop-optional">optional</em>}
                </p>
                <p className="prop-desc">{desc}</p>
                {propItem.default && (
                  <p className="prop-default">
                    <span className="prop-default-title">DEFAULT: </span>
                    <span>{propItem.default}</span>
                  </p>
                )}
              </div>
            );
          })
        }
      </div>
    );
  }
}