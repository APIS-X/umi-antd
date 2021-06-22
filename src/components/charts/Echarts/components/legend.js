import React from 'react';
import {formatThousandth} from '@/utils/tool';

const Legend = (props) => {
  const {title = '', data = [], color = [], type = []} = props;

  return (
    <div className="mod-legend">
      <h4>{title}</h4>
      <ul>
        {data.map((item, index) => {
          const {name, value, ratio, selected} = item;
          const value_show = formatThousandth(value) || '';
          const ratio_show = ratio !== undefined ? `${ratio}` : '';
          const style = {
            borderLeft: `3px ${type[index] || 'solid'} ${color[index] || '#2ea5ff'}`,
          };
          return (
            <li className="item" key={name} style={style}>
              <p className="label">{name}</p>
              <p className="value">{value_show}</p>
              <p className="ratio">{ratio_show}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default React.memo(Legend);
