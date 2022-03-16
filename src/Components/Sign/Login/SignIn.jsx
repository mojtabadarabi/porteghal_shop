import React, { useState } from 'react'
import styles from './signin.module.css'
import {BsTwitter} from 'react-icons/bs'
import FormInput from '../../Reused/FormInput/FormInput'
import FormButton from '../../Reused/FormButton/FormButton'
import { Link, useNavigate } from 'react-router-dom'
import {ReactComponent as Logo} from '../../../Assets/icons/logo.svg'
import customAxios from '../../../Hooks/UseAxios'

export default function SignIn() {
    const axios = customAxios()
    const [password,setpassword] = useState('')
    const [email,setemail] = useState('')
    const navigate = useNavigate()
    const handleSubmitForm=async(e)=>{
        e.preventDefault()
        if(
            email!==''&&email!==' '&&
            password!==''&&password!==' '
        ){
            try {
                const {token,user} = await axios('login','post',{email,password})
                localStorage.setItem('token',token)
                localStorage.setItem('user',JSON.stringify(user))
                navigate('/')
                setemail('')
                setpassword('')
            } catch (error) {
                console.log(error)
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
                        ورود به سایت
                    </h4>
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
                    <FormButton title='ورود' />
                </form>
                <div className={styles.haveaccout}>
                    <h5>
                        حساب کاربری ندارد ؟
                    </h5>
                    <Link to='/signup'>
                        ساخت حساب کاربری
                    </Link>
                </div>
            </section>

    )
}
