import React from 'react';
import {connect} from 'umi';
import {Layout} from 'antd';

import {AuthRouter} from '@/components/Auth';
import Sidebar from './Sidebar';
import Breadcrumbs from './Breadcrumbs';

import styles from './index.less';

const {Header, Content} = Layout;

@connect(({app}) => {
  return {
    app,
  };
})
class LayoutBasic extends React.PureComponent {
  render() {
    const {
      location: {pathname},
      children,
    } = this.props;
    console.log('location', location);

    return (
      <Layout>
        <Sidebar />
        <Layout>
          <Header />
          <Content>
            <Breadcrumbs />
            <div className="container">
              <AuthRouter path={pathname}>{children}</AuthRouter>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutBasic;
