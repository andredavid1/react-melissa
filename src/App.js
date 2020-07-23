import React from 'react';

import User from './assets/img/user.png';
import Email from './assets/img/email.png';
import Whatsapp from './assets/img/whatsapp.png';
import Send from './assets/img/send.png';
import YouTube from './assets/img/youtube.png';
import Instagram from './assets/img/instagram.png';
import Facebook from './assets/img/facebook.png';
import Diva from './assets/img/diva.png';
import Logo from './assets/img/logo.gif';
import ATLogo from './assets/img/at-logo.png';

const App = () => {
    return (
        <div>
            <nav className="site-header sticky-top py-1">
                <div className="container d-flex flex-column flex-md-row justify-content-center">
                    <a className="py-2 d-none d-md-inline-block" href="#home">Home</a>
                    <a className="py-2 d-none d-md-inline-block ml-2" href="#form-lembrete">Inscrição</a>
                </div>
            </nav>

            <div id="home" className="section-home position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal text-white">Você se conhece?</h1>
                    <p className="lead font-weight-normal text-light">Embarque numa viagem de autoconhecimento comigo e descubra o que a ciência pode te explicar e ajudar a entender e a controlar.</p>
                    <a className="btn btn-light" href="#form-lembrete">Venha comigo</a>
                </div>
            </div>

            <div id="form-lembrete" className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="dark-card mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-2 py-2">
                        <h3 className="display-5">NÃO PERCA</h3>
                        <p className="lead">Preencha o formulário abaixo e receba um lembrete antes de cada encontro.</p>
                    </div>
                    <div className="form-card bg-light shadow-sm mx-auto">
                        <h2 className="mb-4 text-dark">Preencha seus dados</h2>
                        <form className="needs-validation" noValidate>
                            <div className="form-row">
                                <div className="col-12">
                                    <label htmlFor="validationName" className="col-2 text-dark text-right align-middle"><img src={User} alt="nome" /></label>
                                    <input className="col-8 ml-2" id="validationName" name="name" type="text" placeholder="como gostaria de ser chamado" required />
                                    <div className="invalid-feedback mb-2 mt-0 ml-2">
                                        Esse campo precisa ser preenchido.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="validationEmail" className="col-2 text-dark text-right align-middle"><img src={Email} alt="e-mail" /></label>
                                    <input className="col-8 ml-2" id="validationEmail" name="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="digite seu e-mail" required />
                                    <div className="invalid-feedback mb-2 mt-0 ml-2">
                                        É preciso preencher um e-mail válido.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="validationWhatsapp" className="col-2 text-dark text-right align-middle"><img src={Whatsapp} alt="whatsapp" /></label>
                                    <input className="col-8 ml-2" id="validationWhatsapp" name="whatsapp" type="tel" maxLength="15" placeholder="(xx) xxxxx-xxxx" required />
                                    <div className="invalid-feedback mb-2 mt-0 ml-4">
                                        É preciso preencher o número de telefone.
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 mt-4">
                                    <button type="submit" className="btn btn-success text-white"><img className="btn-send" src={Send} alt="submit" /> Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex justify-content-center align-items-center my-4 py-3">
                        <a href="https://www.youtube.com/channel/UC9AiOKqFcPbqJPB_YfMVilQ" target="_blank" rel="noopener noreferrer"><img className="social-link" src={YouTube} alt="youtube" /></a>
                        <img className=" diva ml-3" src={Diva} alt="aluguei meu divã canal no youtube" />
                    </div>
                </div>
                <div className="green-card mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-2 py-2">
                        <h2 className="display-5 text-white">Sobre o que falaremos:</h2>
                    </div>
                    <div className="list shadow-sm mx-auto">
                        <ul className="pt-5 list-unstyled">
                            <li className="text-white mb-3">11/07/2020 Tema 1</li>
                            <li className="text-white mb-3">18/07/2020 Tema 2</li>
                            <li className="text-white mb-3">25/07/2020 Tema 3</li>
                            <li className="text-white mb-3">01/08/2020 Tema 4</li>
                            <li className="text-white mb-3">08/08/2020 Tema 5</li>
                        </ul>
                    </div>
                </div>
            </div>

            <footer className="container py-5">
                <div className="col-12 row-footer">
                    <div className="col-12 col-md brand">
                        <img className="brand-logo" src={Logo} alt="logomarca" />
                        <small className="d-block mb-3">&copy; 2020</small>
                    </div>
                    <div className="col-12 col-md social">
                        <a href="https://www.youtube.com/channel/UC9AiOKqFcPbqJPB_YfMVilQ" target="_blank" rel="noopener noreferrer"><img className="social-link" src={YouTube} alt="youtube" /></a>
                    </div>
                    <div className="col-12 col-md social">
                        <a href="https://www.instagram.com/dramelissaduarte" target="_blank" rel="noopener noreferrer"><img className="social-link" src={Instagram} alt="instagram" /></a>
                    </div>
                    <div className="col-12 col-md social">
                        <a href="https://www.facebook.com/psiquiatramelissaduarte" target="_blank" rel="noopener noreferrer"><img className="social-link" src={Facebook} alt="facebook" /></a>
                    </div>
                    <div className="col-12 col-md developer">
                        <span>Desenvolvido por:</span>
                        <a href="/" target="_blank"><img className="developer-link" src={ATLogo} alt="AT logomarca" /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
