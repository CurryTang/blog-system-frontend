import React from 'react'
import Head from 'next/head'
import {Row, Col, Breadcrumb, Icon, Affix} from 'antd';
import Header from '../components/Header';
import ListComponent from '../components/List';
import AuthorComponent from '../components/Author';
import Footer from '../components/Footer';
import '../components/static/index.css';
import MarkdownRender from '../components/Markdown';
import MarkNav from 'markdown-navbar';
import axios from 'axios';
// The default style of markdown-navbar should be imported additionally
import 'markdown-navbar/dist/navbar.css';
import '../components/static/detailed.css';
import servicePath from '../config/apiurl';
import {convertTime} from '../helper/helper';

const Detailed = (props) => (
  <div>
    <Head>
      <title>Detailed Content</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <div className="main-content">
      <Row type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item>视频教程</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="detailed-title">{props.data.name}</div>
            <div className="list-icon center">
                <span><Icon type="calendar" />{convertTime(props.data.created_at)}</span>
                <span><Icon type="fire" />{props.data.view_count}</span>
            </div>
          <div className="detailed-content">
                <MarkdownRender
                  source={props.data.content}
                  escapeHtml={true}
                />
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <AuthorComponent />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <MarkNav
                className="article-menu"
                source={props.data.content}
                ordered={false}
              />
            </div>
          </Affix>
        </Col>
      </Row>
    </div>
    <Footer />
  </div>
)

Detailed.getInitialProps = async (ctx) => {
	  const id = ctx.query.id;
    const response = await axios.get(servicePath.oneArticle + id);
    return {data: response.data};
}

export default Detailed
