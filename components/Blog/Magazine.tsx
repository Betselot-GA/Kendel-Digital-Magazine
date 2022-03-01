import Link from "next/link";
type Props = {
    link: string,
    image: string,
};
export default function SinglePost(props: Props) {
    return (
        <Link href={props.link}>
            <div className="mt-4">
                <img src={props.image} alt="title" className="img-fluid" height={200} />
                <button className="btn btn-outline-warning btn-block my-4 w-100">Download</button>
            </div>
        </Link>
    )
}