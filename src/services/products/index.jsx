export const getData = async (url) => {
    try {
      // const res = await fetch('https://fakestoreapi.com/products')
        const res = await fetch(url,{
        cache: "force-cache",
        next: {
            tags: ["products"],
        }
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
    
}