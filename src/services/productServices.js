export const fetchProducts = async (token) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_URL_DEFAULT_SERVER}/product/admin/getList`, {
            headers: {
                'token': `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}