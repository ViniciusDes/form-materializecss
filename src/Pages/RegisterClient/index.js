import React from "react";

import "./index.css";

function RegisterClient() {
  return (
    <div className="content">
      <form className="form-content-register">
        <div className="content-inputs">
          <div className="content-each-input">
            <i className="material-icons prefix">account_circle</i>
            <input id="icon_prefix" type="text" className="validate" />
            <label htmlFor="icon_prefix" className="label-input">
              Nome
            </label>
          </div>
          <div className="content-each-input">
            <i className="material-icons prefix">confirmation_number</i>
            <input id="first_name" type="text" className="validate" />
            <label htmlFor="icon_prefix" className="label-input">
              CPF
            </label>
          </div>
          <div className="content-each-input">
            <i className="material-icons prefix">phone</i>
            <input id="icon_telephone" type="tel" className="validate" />
            <label className="label-input">Telephone</label>
          </div>
          <div className="content-each-input">
            <i className="material-icons prefix">location_on</i>
            <input id="icon_telephone" type="tel" className="validate" />
            <label className="label-input">Endereço</label>
          </div>
          <div className="content-each-input">
            <i className="material-icons prefix">email</i>
            <input id="icon_telephone" type="tel" className="validate" />
            <label className="label-input">Email</label>
          </div>
        </div>

        <div className="content-btns-footer">
          <div className="content-each-input">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Salvar
            </button>
          </div>
          <div className="content-each-input">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterClient;
