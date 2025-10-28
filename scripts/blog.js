// posts loaded by blog-posts.js script executed in previous html line

function sortPosts(sortBy) {
    switch(sortBy) {
        case 'date':
            posts.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'author':
            posts.sort((a, b) => a.author.localeCompare(b.author));
            break;
        case 'topic':
            posts.sort((a, b) => a.topic.localeCompare(b.topic));
            break;
    }
    displayPosts();
}

function displayPosts() {
    const container = document.getElementById('blogContainer');
    // Reset contents for re-render
    container.innerHTML = '';

    posts.forEach(post => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h3>${post.title}</h3>
            <h4>${post.punchline}</h4>
            <cite>${post.author}</cite>
            <time datetime=${post.date}>${post.date}</time>
            <span>${post.topic}</span>
            <p>${post.content}</p>
        `;
        container.appendChild(article);
    });
}

document.getElementById('sortBy').addEventListener('change', (e) => {
    sortPosts(e.target.value);
});

// Initial display
sortPosts('date');
