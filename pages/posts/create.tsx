import { useState } from "react";
import { BiPlusCircle } from 'react-icons/bi';
import { useMutation, useQueryClient } from "react-query";
import InnerPageLayout from "../../components/layouts/InnerPage";
import { createPost } from "../../lib/requests";
export default function Write() {
    const [headerPicture, setHeaderPicture] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const queryClient = useQueryClient();

    const mutation = useMutation(createPost, {
        onSuccess: () => {
            queryClient.invalidateQueries('posts')
        }
    })

    const handleChange = (event) => {
        setHeaderPicture(event.target.files[0]);
    };

    const submitData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", headerPicture);
        formData.append("title", title);
        formData.append("content", content);
        mutation.mutate(formData)
        if(mutation.isSuccess) {
            setHeaderPicture('')
            setTitle('')
            setContent('')
        }
    };

    return (
        <InnerPageLayout pageTitle="Tell Your Story">
            <div className="search">
                <form onSubmit={submitData} method="post">
                    <div className="input-group">
                        <div className="input-group-append">
                            <label className="btn btn-secondary" htmlFor="fileInput">
                                <BiPlusCircle size={30} />
                            </label>
                        </div>
                        <input
                            type="file"
                            id="fileInput"
                            onChange={handleChange}
                            className="form-control"
                            accept=".jpg, .png, .gif, .jpeg"
                            placeholder="Header Picture"
                            style={{ display: "none" }}
                        />
                        <input type="text" className="form-control" placeholder="Header Picture" disabled />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" className="form-control" disabled={mutation.isLoading} required placeholder="Post Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <textarea className="post-body" disabled={mutation.isLoading} placeholder="Tell your story" required value={content} onChange={(e) => setContent(e.target.value)} ></textarea>
                    <div>
                        <button type="submit" className="btn btn-lg" disabled={mutation.isLoading}>Post</button>
                    </div>
                    <div className="text-info pt-3"><small>
                        {mutation.isLoading && "Posting please wait..."}
                        {mutation.isError && (`Error occured: ${mutation.error.message}`)}
                    </small></div>
                    <div className="text-success pt-3"><small>
                        {mutation.isSuccess && "posted waiting for admin confirmation"}
                    </small></div>
                </form>
            </div>
            <style jsx>
                {`
                .search .input-group, .form-group {
                    border: 3px solid #cda45e;
                    border-radius: 20px;
                    padding: 1px;
                }
                .search input {
                    background: transparent;
                    border: 1px;
                    color: #fff;
                    font-size:18px;
                }

                input:focus {
                    outline: none;
                }

                .search label {
                    background: transparent;
                    border: 0px; 
                }

                .post-body {
                    width: 100%;
                    background: transparent;
                    border: 3px solid #cda45e;
                    border-radius: 20px; 
                    margin-top: 20px;
                    color: #fff;
                    padding: 10px;
                    height: 250px;
                }

                .search button {
                    margin-top: 15px;
                    width: 100%;
                    background:#cda45e;
                }
                `}
            </style>
        </InnerPageLayout>
    );
}