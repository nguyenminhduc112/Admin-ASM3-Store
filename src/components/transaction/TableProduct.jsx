import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { covertPriceVND } from '../../utils/covertCurrency';
import styles from './TableProduct.module.css'

const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    {
        field: 'name', headerName: 'Name', width: 300,

    },
    {
        field: 'price', headerName: 'Price', width: 200,
        valueGetter: (params) => {
            return covertPriceVND(params.row.price)
        }
    },
    {
        field: 'image',
        headerName: 'Image',
        width: 150,
        renderCell: (params) => {
            return <img src={params.row.img1} width={50} height={50} alt={params.row.name} />
        }
    },
    {
        field: 'category', headerName: 'Category', width: 200,
    },
    {
        field: 'actions', headerName: 'Edit', width: 300,
        renderCell: (params) => {
            return <div className={styles.boxAction}>
                <button className={styles.btnEdit}>Edit</button>
                <button className={styles.btnDelete}>Delete</button>
            </div>
        }
    },
];
const TableProduct = ({ products, pageSizeOptions, title }) => {
    const [productsFinal, setProductsFinal] = useState(products)
    const onChangeSearch = (e) => {
        const keySearch = e.target.value.toLowerCase()
        if (keySearch) {
            const productsFilter = products.filter(product => {
                return product.name.toLowerCase().includes(keySearch)
            })
            setProductsFinal(productsFilter)
        } else {
            setProductsFinal(products)
        }

    }
    return (
        <React.Fragment>
            <h2 className={styles.title}>{title}</h2>
            <input type='search' name='search' placeholder='Enter Search!' onChange={onChangeSearch} className={styles.input} />
            <div style={{ height: '80vh', width: '100%' }}>
                <DataGrid
                    getRowId={(row) => row._id}
                    rows={productsFinal}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: pageSizeOptions[0] },
                        },
                    }}
                    pageSizeOptions={pageSizeOptions}
                    checkboxSelection
                />
            </div>
        </React.Fragment>
    )
}

export default TableProduct
