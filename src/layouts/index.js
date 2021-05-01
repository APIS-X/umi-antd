import React from 'react';
import {connect} from 'umi';
import {Layout} from 'antd';

import Sidebar from './Sidebar';
import Breadcrumbs from './Breadcrumbs';

import styles from './index.less';

const {Header, Content} = Layout;

@connect(({global}) => {
  return {
    global,
  };
})
class LayoutBasic extends React.PureComponent {
  render() {
    const {children} = this.props;

    return (
      <Layout>
        <Sidebar />
        <Layout>
          <Header />
          <Content>
            <Breadcrumbs />
            <div className="container">
              <>{children}</>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutBasic;
