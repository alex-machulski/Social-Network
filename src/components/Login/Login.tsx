import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field type="text" placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={"input"}/> Remember me
            </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;