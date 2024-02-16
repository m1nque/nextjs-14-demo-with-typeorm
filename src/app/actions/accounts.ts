'use server'

export const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    return response.json();
}
