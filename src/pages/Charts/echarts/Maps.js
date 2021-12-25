import React, {memo, useState, useEffect} from 'react';

import ModCard from '@/components/ModCard';
import {Maps} from '@/components/charts/Echarts';

import JsonMap from '@/components/charts/data/json/china.json';

console.log('JsonMap', JsonMap);

const Template = (props) => {
  const [dataMaps, setDataMaps] = useState({
    name: '中国地图',
    data: [],
  });

  // 省份假数据mock
  const getDataProvince = () => {
    const dataMapList = JsonMap.features.map((item) => {
      return {
        name: item.properties.name,
        value: +item.id,
      };
    });

    setDataMaps({
      name: '中国地图',
      data: dataMapList,
    });
  };

  useEffect(() => {
    getDataProvince();
  }, []);

  return (
    <ModCard title="地图">
      <Maps data={dataMaps} />
    </ModCard>
  );
};

export default memo(Template);
