function LoginCheck (){
    axios.get(DB)
    .then((res) => {
        console.log(res.data)
    })
    .catch((error) => {
        console.log(error)
    })
}