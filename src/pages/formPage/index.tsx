import * as c from './styles';
import { EnvelopeSimple, LockKey, User } from 'phosphor-react'
import { useState } from 'react';

export const FormPage = () => {
    const [login, setLogin] = useState(false);

    console.log(login);

    return (
        <c.RegisterPage>
            <c.LoginAccountArea login={login}>
                {login &&
                    <div className='registerForm' >
                        <form>
                            <h1>Entre com a sua conta</h1>
                            <div className='label' >
                                <EnvelopeSimple size={44} className='icon' />
                                <input type='email' autoFocus autoComplete='off' required placeholder='Digite seu email'/>
                            </div>
                                <div className='label'>
                                <LockKey className='icon' size={44} />
                            <input type='password' required autoComplete='off' placeholder='Digite sua senha'/>
                        </div>
                        <input className='submit' value='Entrar' type='submit'/>
                        </form>
                    </div>
                } {!login &&
                    <div>
                        <h1>Bem vindo de volta</h1>
                        <p>Se você ja tiver uma conta, clique no botão abaixo</p>
                        <button onClick={e => setLogin(!login)} >Entre com a sua conta</button>
                    </div>
                }    
            </c.LoginAccountArea>
            {login &&
                    <c.CreateAccountArea login={login}>
                        <div className='createAccountLink' >
                            <h1>Não tem uma conta ainda?</h1>
                            <p>Clique no botão abaixo e crie sua conta agora mesmo</p>
                            <button onClick={e => setLogin(!login)} >Entre com a sua conta</button>
                        </div>
                    </c.CreateAccountArea>
            } {!login &&
                <c.CreateAccountArea login={login}>
                <div className='registerForm' >
                    <h1>Crie a sua conta</h1>
                        <form>
                            <div className='userName' >
                                <User className='icon' />
                                <input type='text' placeholder='Nome' autoFocus autoComplete='off' required/>
                                <User className='icon' />
                                <input type='text' placeholder='Sobrenome' autoComplete='off'/>
                            </div>
                            <div className='label' >
                            <EnvelopeSimple size={44} className='icon' />
                            <input type='email' required autoComplete='off' placeholder='Digite seu email'/>
                            </div>
                            <div className='label'>
                                <LockKey className='icon' size={44} />
                                <input type='password' required autoComplete='off' placeholder='Digite sua senha'/>
                            </div>
                            <div className='label'>
                                <LockKey className='icon' size={44} />
                                <input type='password' required autoComplete='off' placeholder='Confirme sua senha'/>
                            </div>
                            <input type='submit' className='submit' autoComplete='off' value='Criar Conta'/>
                        </form>
                    </div>
                </c.CreateAccountArea>
                }
        </c.RegisterPage>
    );
} 