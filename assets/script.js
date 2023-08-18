const postList = document.getElementById('post-list');

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        const ListItems = data.map(post => `
            <div>
                <ul>
                    <li>User ID: ${post.userId}</li>
                    <li>Post ID: ${post.id}</li>
                    <li>Title: ${post.title}</li>
                </ul>
            </div>
        `).join('');

        postList.innerHTML = ListItems;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
