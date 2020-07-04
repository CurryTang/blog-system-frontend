import React from 'react'
import Head from 'next/head'
import {Button, Row, Col} from 'antd';
import Header from '../components/Header';
import ListComponent from '../components/List';
import AuthorComponent from '../components/Author';
import Footer from '../components/Footer';
import axios from 'axios';
import servicePath from '../config/apiurl';

const Home = (props) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <div className="main-content">
      <Row type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <ListComponent list={props.data}/>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <AuthorComponent />
        </Col>
      </Row>
    </div>
    <Footer />
    
  </div>
)

// export async function getStaticProps() {
// 	const response = await axios.get('http://127.0.0.1:7001/default/getAllArticles');
// 	return {
// 		data: response.data
// 	};
// }

Home.getInitialProps = async () => {
	  const response = await axios.get(servicePath.getAll);
		return {data: response.data};
	
}

export default Home
