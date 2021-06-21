import {shadowStyle} from '../config';

export const optionDefault = {
  series: [
    {
      type: 'pie',
      radius: '60%',
      top: '10%',
      minAngle: 25,
      startAngle: 180,
      itemStyle: {
        borderColor: '#FCFCFF',
        borderWidth: 1,
      },
      emphasis: {
        itemStyle: {
          borderWidth: 0,
          ...shadowStyle,
        },
      },
      label: {
        // alignTo: 'labelLine',
        rich: {
          a: {
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            color: 'rgba(0,0,0,.65)',
            align: 'left',
            lineHeight: 18,
          },
          b: {
            fontSize: 14,
            fontFamily: 'Roboto-Medium',
            color: 'rgba(0,0,0,.85)',
            fontWeight: 500,
            align: 'left',
            lineHeight: 18,
          },
          c: {
            lineHeight: 4,
          },
        },
      },
      labelLine: {
        showAbove: true,
        length: 25,
        length2: 5,
      },
    },
  ],
  color: ['#2656F0', '#466FF2', '#7291F5', '#9DB3F8', '#9DB3F8', '#C9D5FB'],
};
