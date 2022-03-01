import InnerPageLayout from "../../components/layouts/InnerPage";
import { BiSearchAlt } from "react-icons/bi";
import SinglePost from "../../components/Blog/SinglePost";
import { useQuery, useQueryClient } from "react-query";
import { fetchApprovedPosts } from "../../lib/requests";
export default function PostsPage() {
    const queryClient = useQueryClient();
    const { isLoading, isError, data, error } = useQuery('todos', fetchApprovedPosts)
    return (
        <InnerPageLayout pageTitle="Latest Posts">
            <div className="row">
                {/* <div className="col-md-3 search">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search post" />
                            <div className="input-group-append">
                                <button className="btn btn-secondary" type="button">
                                    <BiSearchAlt size={30} />
                                </button>
                            </div>
                        </div>
                    </form>
                </div> */}
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
                {data && (

                    <div className="row col-md-12">
                        {(data.length !== 0) ? data.map(post => (

                                <div className="col-md-4" key={post.id}>
                                    <SinglePost id={post.id} title={post.title} content={post.content} image={`https://res.cloudinary.com/instant-chat/v${post.version}/${post.publicId}.${post.format}`}/>
                                </div>
                            )) :(
                                <div className="col-md-12">
                                    <div className="alert alert-warning d-flex justify-content-center">
                                        <h3>No post come back later!!</h3>
                                    </div>
                                 </div>
                            )
                        }
                    </div>
                )}
            </div>
            <style jsx>
                {`
                .search .input-group {
                    border: 3px solid #cda45e;
                    border-radius: 20px;
                    padding: 1px;
                }
                .search input {
                    background: transparent;
                    border: 1px;
                    color: #fff;
                }

                input:focus {
                    outline: none;
                }

                .search button {
                    background: transparent;
                    border: 0px; 
                }
                `}
            </style>
        </InnerPageLayout >
    );
}