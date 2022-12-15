import axios from 'axios';
export const getCartAPI = async () => {
    if (sessionStorage.user) {
        console.log(sessionStorage.user);
        let user = JSON.parse(sessionStorage.user);
        return await axios
            .get(`http://localhost:8080/api/cart/${user.id}`)
            .then((response) => response.data)
            .catch((res) => alert(res));
    }
};

export const removeCartItemAPI = async (product_id) => {
    if (sessionStorage.user) {
        let user = JSON.parse(sessionStorage.user);
        return await axios({
            method: 'delete',
            url: `http://localhost:8080/api/cart/${user.id}`,
            data: {
                product_id: product_id,
            },
        })
            .then((res) => res)
            .catch((err) => alert('Đã xảy ra lỗi'.err));
    }
};
