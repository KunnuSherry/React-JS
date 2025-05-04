import { useForm } from "react-hook-form"

function ReactHookFormExample(){

    const {register, handleSubmit, formState: {errors}, reset} = useForm()

    function onSubmitForm(formData){
        console.log(formData)
        reset()
    }

    return(
        <div>
            <h1>React Hook Form</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <label htmlFor="">Email</label>
                    <input {...register('email',
                        {required: true}
                    )} type="email" name="email"/>
                    {
                        errors.email && errors.email.type ==='required'?
                        (<p>Email is Required</p>) : (<p>Everything is fine</p>) 
                    }
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input {...register("password",{
                        required: true,
                        minLength: 8
                    })} type="password" name="password"/>
                    {
                        errors.password && errors.password.type ==='required'?
                        (<p>password is Required</p>) : (<p>Everything is fine</p>) 
                    }
                    {
                        errors.password && errors.password.type ==='minLength'?
                        (<p>Minimum length should be 8</p>) : (<p>Everything is fine</p>) 
                    }
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default ReactHookFormExample