import React from 'react';
import {connect} from 'umi';
import {Layout} from 'antd';

import {AuthRouter} from '@/components/Auth';
import {listRouterBlank} from '@/settings';
import Sidebar from './Sidebar';
import Breadcrumbs from './Breadcrumbs';

import './index.less';

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
      app: {dataMenus = []},
    } = this.props;
    let renderPage = null;

    if (listRouterBlank.includes(pathname)) {
      renderPage = (
        <Layout>
          <AuthRouter path={pathname}>{children}</AuthRouter>
        </Layout>
      );
    } else {
      renderPage = (
        <Layout>
          <Sidebar dataMenus={dataMenus} />
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

    return renderPage;
  }
}

export default LayoutBasic;
