const link = 'https://5e032d0763d08b0014a28d2b.mockapi.io/test7/user';
async function getUserFromApi() {
    try {
        let respon = await fetch(link)
        let resJson = await respon.json()
        return resJson
    } catch (error) {
        console.log('Error get data', error)
    }
   
}
export const Api = {
    getUserFromApi
};
 // const response = yield fetch(link, {
    //     method: 'GET',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: '',
    // });
    // const movies = yield response.json()       
    // return movies;