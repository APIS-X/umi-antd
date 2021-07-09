import React, {useEffect} from 'react';

export default function Template() {
  useEffect(() => {
    console.log('location', location);
  }, [location]);

  return (
    <div>
      <h1>404~ 抱歉，暂无权限查看该页面或者页面不存在~</h1>
    </div>
  );
}
