import React, {useState} from 'react';
import PrimaryButton from '../../components/Default/PrimaryButton'
import {CountryDropdown, RegionDropdown } from "react-country-region-selector";
import './styles.css'


const Form= (props) => {

    const [state, setState] = useState("BR");
    const [cn, setCn] = useState();


    return (
        <div className="Form box">
            <h2>Prencha o formulário abaixo para descobrir quando você poderá ser vacinado</h2>
            <h3>Idade*</h3>
            <input className="input_field" type="number" max="130" min="0"/>

            <h3>Estado*</h3>
            <select id="estado" className="input_field" name="estado">
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
            </select>

            <h3>Você faz parte de grupos de risco?*</h3>
            <PrimaryButton text={"Procurar"}/>
        </div>
    );
}


export default Form