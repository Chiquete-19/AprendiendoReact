export const Login = () => (   
        <>
            <div>
                <h1>Login</h1>
            </div>
            <div className="input-group mb-3" style={{alignContent:'center', display:'flex', justifyContent:'center'}}>
                <form action="" className="">
                    <label htmlFor="email" >Correo Electronico</label>
                    <input className="form-control" id="email" type="mail" />
                    <label htmlFor="password">Contraseña</label>
                    <input className="form-control" id="password" type="password" placeholder="2123"/><br />
                    <button className="btn btn-primary form-control" type="submit">Iniciar Sesión</button>
                </form>
            </div>
        </>
    );