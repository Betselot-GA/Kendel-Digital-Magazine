import { useState } from 'react';
import Link from "next/link";
import { useForm } from "react-hook-form";
import InnerPageLayout from "../../components/layouts/InnerPage";
import Router from "next/router";
import { useMutation, useQueryClient } from 'react-query';
import { createAccount } from '../../lib/requests';
export default function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const queryClient = useQueryClient();

    const mutation = useMutation(createAccount, {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        }
    })
    const submitData = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const data = { name, email, password };
        mutation.mutate(data)
        if(mutation.isSuccess) {
            Router.push("/auth/login")
        }
    }
    return (
        <InnerPageLayout pageTitle="">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="auth">
                            <div>
                                <form onSubmit={submitData}>
                                    <h2>Create Account</h2>
                                    <div className="form-group">
                                        <input type="text" className="form-control" disabled={mutation.isLoading}  id="name" placeholder="Name" required  value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control"  disabled={mutation.isLoading} id="email" required  placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control"  disabled={mutation.isLoading} id="password" required  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="d-flex flex-row align-items-center justify-content-between">
                                        <Link href="/auth/login"><a href="#">Already have account?</a></Link>
                                        <button type="submit" className="btn btn-primary">Create Account</button>
                                    </div>
                                    <div className="text-info pt-3"><small>
                                        { mutation.isLoading && "Creating account please wait..." }
                                        { mutation.isError && (`Error occured: ${ mutation.error.message }`)}
                                    </small></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
    .auth .form-group {
    margin-bottom: 20px;
  }
  
  .auth input {
    background: transparent;
    border: 3px solid #cda45e;
    border-radius: 26px;
    padding: 10px 21px;
    color: #fff;
  }
  .auth h2 {
    text-align: center;
    margin-bottom:20px;
  }
  .auth button {
    border-radius: 20px;
    padding: 10px 33px;
    background: #cda45e;
    border: 0px;
    font-weight: bold;
  }
`}</style>
        </InnerPageLayout>
    );
}