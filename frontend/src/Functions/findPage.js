export const findWhichPage = ()=>{
    const url = window.location.pathname
    console.log(url)

    switch (url){
        case '/':
            return 'home'
        case '/incomplete':
            return 'incomplete'
        case '/add':
            return 'add'
        case '/storage':
            return 'storage'
        case '/profile':
            return 'profile';
        default:
            return ''

    }
}