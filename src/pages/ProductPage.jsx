import React, { Suspense } from 'react'
import { fetchProducts } from '../services/productServices'
import { Await, defer, useLoaderData } from 'react-router-dom'
import TableProduct from '../components/transaction/TableProduct'
import { getIsAuthentication } from '../utils/auth'

const ProductPage = () => {
    const { products } = useLoaderData()
    return (
        <React.Fragment>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={products}>
                    {(productsLoader) => <TableProduct products={productsLoader} pageSizeOptions={[10, 20]} title={'Products List'} />}
                </Await>
            </Suspense>
        </React.Fragment>
    )
}
const productsLoader = () => {
    const token = getIsAuthentication()
    const data = fetchProducts(token)
    return data
}

export const loaderProductPage = function () {
    return defer({
        products: productsLoader()
    })
}
export default ProductPage
