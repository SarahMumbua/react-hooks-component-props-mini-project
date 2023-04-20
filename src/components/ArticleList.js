import Article from "./Article";

function ArticleList({ articles }) {

    return (
        <main>
            <Article posts={articles} />
        </main>
    );
}

export default ArticleList;