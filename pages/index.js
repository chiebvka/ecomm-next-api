import Homes from '../components/Homes';
import Layout from '../components/layout/Layout';

import { getProducts } from '../redux/actions/productActions';

import { wrapper } from '../redux/store'

export default function Home() {
  return (

    <Layout>
      <Homes />
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req }) => {
  await store.dispatch(getProducts(req))
})
