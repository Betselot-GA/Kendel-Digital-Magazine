import Link from "next/link";
import { useMutation, useQuery, useQueryClient } from "react-query";
import InnerPageLayout from "../../components/layouts/InnerPage";
import { ApprovePost, fetchPosts } from "../../lib/requests";

export default function ManagePostPage() {

    const queryClient = useQueryClient();
    const { isLoading, isError, data, error } = useQuery('posts', fetchPosts)

    const mutation = useMutation(ApprovePost, {
        onSuccess: () => {
            queryClient.invalidateQueries('posts')
        }
    })
    function Approve(id) {
        mutation.mutate({ id: id })
    }
    return (
        <InnerPageLayout pageTitle="Manage Posts">
            <Link href="/posts/create">
                <button className="btn btn-warning my-4">Create Post</button>
            </Link>
            {isLoading && (
                <div className="col-md-12 alert alert-warning">
                    Loading posts please wait...
                </div>
            )}
            {isError && (
                <div className="col-md-12 alert alert-warning">
                    Opps error occured please refresh the page:  {error}
                </div>
            )}
            <table className="table table-bordered text-white">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                {data && (


                    <tbody>
                        {
                            data.map(post => (
                                <tr>
                                    <td>Hello, world</td>
                                    <td>
                                        <Link href={'/posts/' + post.id}><button className="btn btn-warning btn-sm mx-1">View</button></Link>
                                        {(post.published) ? (
                                            <button className="btn btn-success btn-sm mx-1">Approved</button>) : (
                                            <button className="btn btn-warning btn-sm mx-1" onClick={()=> Approve(post.id)}>Approve</button>)}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                )}

            </table>

            <div className="text-info pt-3"><small>
                {mutation.isLoading && "Approving please wait..."}
                {mutation.isError && (`Error occured: ${mutation.error}`)}
            </small></div>
            <div className="text-success pt-3"><small>
                {mutation.isSuccess && "Post Approved"}
            </small></div>
        </InnerPageLayout >
    )
}