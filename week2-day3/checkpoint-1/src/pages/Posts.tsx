import { Link, Outlet } from "react-router-dom";

const dataPost = [
    { id: 1, title: "post 1" },
    { id: 2, title: "post 2" },
    { id: 3, title: "post 3" },
]

const Posts = () => {
    return (
        <div className="flex flex-col items-center">
            <h1>Ini Posts</h1>
            <ul className="flex gap-2 mb-9">
                {
                    dataPost.map((post, index) => (
                        <li key={index} className="py-2 px-4 border-2 border-gray-400 rounded">
                            <Link to={post.id.toString()}>
                                {post.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Outlet />
        </div>
    );
}

export default Posts;