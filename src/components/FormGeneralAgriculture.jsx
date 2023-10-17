import React from "react";
import InputMask from 'react-input-mask';
import CurrencyInput from 'react-currency-input-field';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/FormStyles.css'

const FormGeneralAgriculture = () => {
    return ( 
     <div>
        <form className="row g-3">
         <div className="col-12"></div>
         <div className="col-12"></div>
         <div className="col-8">
          <label htmlFor="inputName" className="form-label">Nome Produtor Rural</label>
          <input type="text" className="form-control" id="inputName" disabled/>
        </div>
        <div className="col-4">
          <label htmlFor="inputCPF" className="form-label">
            CPF do Produtor Rural
          </label>
          <InputMask
            mask="999.999.999-99"
            type="text"
            className="form-control"
            id="inputCPF"
            disabled
          />
        </div>
        <div className="col-1">
          <label htmlFor="inputMatricula" className="form-label">Matricula</label>
          <input type="text" className="form-control" id="inputMatricula" disabled/>
        </div>
        <div className="col-1">
          <label htmlFor="inputLote" className="form-label centered">Lote</label>
          <input type="text" className="form-control" id="inputLote" disabled/>
        </div>
        <div className="col-1">
          <label htmlFor="inputGleba" className="form-label centered">Gleba</label>
          <input type="text" className="form-control" id="inputGleba" disabled/>
        </div>
        <div className="col-5">
          <label htmlFor="inputCCIR" className="form-label centered">CCIR</label>
          <input type="text" className="form-control" id="inputCCIR" disabled/>
        </div>
        <div className="col-4">
          <label htmlFor="inputCity" className="form-label centered">Cidade</label>
          <input type="text" className="form-control" id="inputCity" disabled/>
        </div>
        <div className="col-12"></div>
        <div className="col-2"></div>
        <div className="col-8">
            <label htmlFor="inputText" className="form-label centered">Qual cultura - Agricultura Geral?</label>
            <input type="text" className="form-control" id="inputText"/>
         </div>
         <div className="col-2"></div>
         <div className="col-12"></div>
         <div className="row g-3 container-2">
         <div className="col-12"></div>
         <div className="col-12 centered"><h6><strong>Dados da Safra Prevista</strong></h6></div>
         <div className="col-6">
            <label htmlFor="inputText" className="form-label centered">Forma de Cultivo</label>
            <select className="form-select input" id="inputText">
                <option value=""></option>
                <option value="">Estufa/casa de vegetação</option>
                <option value="">Plantio Irrigado</option>
                <option value="">Plantio não irrigado</option>
            </select>
         </div>
         <div className="col-6">
            <label htmlFor="inputText" className="form-label centered">Identificação de Safra</label>
            <select className="form-select input" id="inputText">
                <option value=""></option>
                <option value="">Fruticultura/Olericultura</option>
                <option value="">Inverno (3ª Safra)</option>
                <option value="">Safrinha (2ª Safra)</option>
                <option value="">Verão (1ª Safra)</option>
            </select>
         </div>
          <div className="col-12"></div>
          <div className="col-12"></div>
          <div className="col-12"></div>
          </div>
          <div className="row g-3 container-3">
          <div className='text-center'>
          <div className="col-8 text-center"><h6>Ano predominante da colheita:</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control" id="inputText"/>
          </div>
        </div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Área de plantio da cultura (hectares):</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control" id="inputText"/>
          </div>
        </div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Produtividade estimada para a safra (kg/ha ou unidade/ha):</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control" id="inputText"/>
          </div>
        </div>
        <div className='text-center'>
        <div className="col-8 text-center"><h6>Nivel tecnológico adotado para esta cultura:</h6></div>
            <label htmlFor="inputTexturaSolo" className="form-label"></label>
            <select className="form-select input" id="inputTexturaSolo">
                <option value=""></option>
                <option value="alto">Alto</option>
                <option value="baixo">Baixo</option>
                <option value="medio">Médio</option>
            </select>
        </div>
        <div className='text-center'>
        <div className="col-8 text-center"><h6>Contrato de pré-venda para mais de 50% da produção?</h6></div>
            <label htmlFor="inputTexturaSolo" className="form-label"></label>
            <select className="form-select input" id="inputTexturaSolo">
                <option value=""></option>
                <option value="">Sim</option>
                <option value="">Não</option>
            </select>
        </div>
        <div className="col-12"></div>
        <div className="col-12"></div>
        </div>
        <div className="col-12"></div>
        <div className="col-12"></div>
        <div className="col-12"></div>
        <div className="row">
          <div className="col-4">
            <label htmlFor="inputCivilState" className="form-label centered">Receita Estimada</label>
            <label htmlFor="inputCivilState" className="form-label centered invisible">a</label>
            <label htmlFor="inputCivilState" className="form-label centered">Preço estimado de venda</label>
            <CurrencyInput
              id="inputText"
              name="inputText"
              className="form-control"
              placeholder="R$0,00"
              prefix="R$"
              decimalSeparator=","
              groupSeparator="."
              allowNegativeValue={false}
              decimalsLimit={2}
              onValueChange={(value, name) => {
              }}
            />
          </div>
          <div className="col-4">
            <label htmlFor="inputCivilState" className="form-label centered">Despesa Total Estimada</label>
            <label htmlFor="inputCivilState" className="form-label centered invisible">a</label>
            <label htmlFor="inputCivilState" className="form-label centered">Custo unitário de produção</label>
            <CurrencyInput
              id="inputText"
              name="inputText"
              className="form-control"
              placeholder="R$0,00"
              prefix="R$"
              decimalSeparator=","
              groupSeparator="."
              allowNegativeValue={false}
              decimalsLimit={2}
              onValueChange={(value, name) => {
              }}
            />
          </div>
          <div className="col-4">
            <label htmlFor="inputCivilState" className="form-label centered invisible">a</label>
            <label htmlFor="inputCivilState" className="form-label centered invisible">a</label>
            <label htmlFor="inputCivilState" className="form-label centered">Ano-Safra</label>
            <input type="text" className="form-control" id="inputText" />
          </div>
        </div>           

        <div className="col-12 submit-button">
          <button type="submit" className="btn btn-primary">Salvar</button>
        </div>
        
        </form>
     </div>
     );
}
 
export default FormGeneralAgriculture;