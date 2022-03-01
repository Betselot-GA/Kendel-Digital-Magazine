import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

import InnerPageLayout from "../../components/layouts/InnerPage";
export default function LoginPage() {
    const [loginError, setLoginError] = useState("");
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const router = useRouter();
    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;

        signIn("credentials", {
            email: email,
            password: password,
            callbackUrl: `${window.location.origin}/`,
            redirect: false,
        })
            .then(function (result) {
                if (result.error !== null) {
                    if (result.status === 401) {
                        setLoginError(
                            "Your email/password combination was incorrect. Please try again"
                        );
                    } else {
                        setLoginError(result.error);
                    }
                } else {
                    router.push(result.url);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <InnerPageLayout pageTitle="">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="auth">
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h2>Login</h2>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email" placeholder="Email"  {...register("email", { required: true })} />

                                        <small className="text-danger px-3">
                                            {errors.email && "Email is required"}
                                        </small>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="password" placeholder="Password"
                                            {...register("password", { required: true })} />
                                        <small className="text-danger px-3">

                                            {errors.password && "Password is required"}
                                        </small>
                                    </div>
                                    <div className="d-flex flex-row align-items-center justify-content-between">
                                        <Link href="/auth/signup"><a href="#">Don't have account?</a></Link>
                                        <button className="btn btn-primary" type="submit">Login</button>
                                    </div>
                                    <div className="text-danger pt-3"><small>{loginError}</small></div>
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