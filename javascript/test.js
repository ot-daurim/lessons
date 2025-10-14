const user_001 = {
    first_name: 'Panam',
    surname: 'Palmer',
    myFunc: () => {
        return user_001.first_name
    }
}


const userInfo = user_001.myFunc()

console.log(userInfo)
