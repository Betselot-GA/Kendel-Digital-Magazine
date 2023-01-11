import { useRouter } from "next/router"
import { useQuery, useQueryClient } from "react-query";
import InnerPageLayout from "../../components/layouts/InnerPage"
import { fetchSinglePosts } from "../../lib/requests";

export default function SinglePostPage() {
    const router = useRouter()
    const { id } = router.query


    // @ts-ignore
    const queryClient = useQueryClient();
    const { isLoading, isError, data, error } = useQuery(['todo', id], fetchSinglePosts)
    return (
        <InnerPageLayout pageTitle={isLoading ? "Loading page please wait" : data?.title}>
    
            {!isLoading && (
                
                <div className="row">
                    <div className="col-md-12 post" >
                        <div className="d-flex justify-content-center">
                            <img src={`https://res.cloudinary.com/instant-chat/v${data?.version}/${data?.publicId}.${data?.format}`} alt="title" width="100%" height={500} className="pb-4" />
                        </div>
                        <p>
                           { data?.content }
                        </p>
                    </div>
                </div>
            )}

            {isError && (
                 <div className="row">
                 <div className="col-md-12 post" >
                     <h1>Error Occured: { error } .please refresh your page!!</h1>
                 </div>
             </div>
            )}

            <style jsx>
                {
                    `
    .post{
        padding: 0px 100px;
    }
    `
                }
            </style>
        </InnerPageLayout>
    )
}