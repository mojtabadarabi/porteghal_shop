import React, { useState } from 'react'
import styles from './signup.module.css'
import {BsTwitter} from 'react-icons/bs'
import FormInput from '../../Reused/FormInput/FormInput'
import FormButton from '../../Reused/FormButton/FormButton'
import { Link, useNavigate } from 'react-router-dom'
import {ReactComponent as Logo} from '../../../Assets/icons/logo.svg'

export default function SignUp() {

    const [fullname,setfullname] = useState('')
    const [password,setpassword] = useState('')
    const [email,setemail] = useState('')
    const navigate = useNavigate()
    const handleSubmitForm=async(e)=>{
        e.preventDefault()
        if(
            fullname!==''&&fullname!==' '&&
            email!==''&&email!==' '&&
            password!==''&&password!==' '
        ){
            try {
                await fetch(`${process.env.REACT_APP_BASE_URL}/api/register`,{
                    method:'post',
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({fullname,email,password})
                })
                navigate('/signin')
                setemail('')
                setpassword('')
                setfullname('')
                
            } catch (error) {
                alert(error)
            }
        }
        else{
            alert('empty')
        }
    }
    return (
            <section className={styles.container}>
                <Logo className={styles.logo}/>
                <form onSubmit={handleSubmitForm} className={styles.form}>
                    <h4>
                        ثبت نام در سایت
                    </h4>
                    <div className={styles.inputcontaienr}>
                        <BsTwitter className={styles.iconform} />
                        <FormInput
                            value={fullname}
                            onChange={e=>setfullname(e.target.value)}
                            className={styles.input}
                            type='text'
                            placeholder="نام"
                         />
                    </div>
                    <div className={styles.inputcontaienr}>
                        <BsTwitter className={styles.iconform}/>
                        <FormInput
                            value={email}
                            onChange={e=>setemail(e.target.value)}
                            className={styles.input}
                            type='text' 
                            placeholder="ایمیل"
                         />
                    </div>
                    <div className={styles.inputcontaienr}>
                        <BsTwitter className={styles.iconform}/>
                        <FormInput 
                            value={password}
                            onChange={e=>setpassword(e.target.value)}
                            className={styles.input} 
                            type='password' 
                            placeholder="رمز عبور"
                        />
                    </div>
                    <FormButton title='ثبت نام' />
                </form>
                <div className={styles.haveaccout}>
                    <h5>
                        حساب کاربری دارید ؟
                    </h5>
                    <Link to='/signin'>
                        ورود به حساب
                    </Link>
                </div>
            </section>
    )
}
