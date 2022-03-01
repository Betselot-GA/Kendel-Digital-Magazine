import Link from "next/link";

export default function SinglePost(props) {
    return (
        <Link href={`/posts/${props.id}`}>
            <div className="mt-4">
                <img src={props.image} alt="title" className="img-fluid pb-3" />
                <small>{props.createdAt}</small>
                <h3 className="pt-2">{props.title}</h3>
                <p>
                    {props?.content.slice(0, 50)}
                </p>
                <button className="btn btn-outline-warning btn-block">Read full article</button>
            </div>
        </Link>
    )
}