import React from "react";
import InputMask from 'react-input-mask';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/FormStyles.css'
import CurrencyInput from 'react-currency-input-field';


const FormPerennialCulture = () => {

  const handleOnlyNumber = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    if (numericValue.length > 2) {e.target.value = numericValue.slice(0, 2);}
    else {e.target.value = numericValue;}};

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
        <div className="col-12">
            <label htmlFor="inputCivilState" className="form-label centered">Qual cultura Perene?</label>
            <select className="form-select input centered" id="inputCivilState">
                <option value=""></option>
                <option value="cafe-arabica">Café Arábica</option>
                <option value="cafe-robusta">Café Robusta</option>
                <option value="cana-de-acucar">Cana-de-açúcar</option>
                <option value="laranja-de-mesa">Laranja de mesa</option>
                <option value="laranja-para-industria">Laranja para indústria</option>
            </select>
        </div>
        <div className="col-12"></div>
        <div className="col-12">
            <label htmlFor="inputDate" className="form-label centered">Histórico de safras anteriores - Área Plantada</label>
                <div className="row centered">
                    <div className="col-3">
                        <label htmlFor="inputDate" className="form-label centered">3 anos atrás</label>
                        <input type="text" className="form-control" id="inputDate" placeholder="hectares" onInput={handleOnlyNumber} />
                    </div>
                    <div className="col-3">
                        <label htmlFor="inputDate" className="form-label centered">2 anos atrás</label>
                        <input type="text" className="form-control" id="inputDate" placeholder="hectares" onInput={handleOnlyNumber}/>
                    </div>
                    <div className="col-3">
                        <label htmlFor="inputDate" className="form-label centered">1 anos atrás</label>
                        <input type="text" className="form-control" id="inputDate" placeholder="hectares" onInput={handleOnlyNumber}/>
                    </div>
            </div>
        </div>
        <div className="col-12"></div>
        <div className="col-12">
            <label htmlFor="inputDate" className="form-label centered">Histórico de safras anteriores - Área Renovada</label>
                <div className="row centered">
                    <div className="col-3">
                        <label htmlFor="inputDate" className="form-label centered">3 anos atrás</label>
                        <input type="text" className="form-control" id="inputDate" placeholder="hectares" onInput={handleOnlyNumber} />
                    </div>
                    <div className="col-3">
                        <label htmlFor="inputDate" className="form-label centered">2 anos atrás</label>
                        <input type="text" className="form-control" id="inputDate" placeholder="hectares" onInput={handleOnlyNumber}/>
                    </div>
                    <div className="col-3">
                        <label htmlFor="inputDate" className="form-label centered">1 anos atrás</label>
                        <input type="text" className="form-control" id="inputDate" placeholder="hectares" onInput={handleOnlyNumber}/>
                    </div>
            </div>
        </div>
        <div className="col-12"></div>
        <div className="row g-3 container-2">
        <div className='col-12'></div>
        <div className="col-12">
          <label htmlFor="inputDate" className="form-label centered"><h4>Histórico de safras anteriores - Área Renovada</h4></label>
        </div>
        <div className="col-12"></div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Ano de previsão da colheita:</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control" id="inputText"/>
          </div>
        </div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Área de plantio atual da cultura (hectares):</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control" id="inputText"/>
          </div>
        </div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Área a ser renovada na safra prevista:</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control" id="inputText"/>
          </div>
        </div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Percentual da área total da cultura com irrigação:</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control" id="inputText"/>
          </div>
        </div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Percentual da área total da cultura com mecanização de colheita:</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control" id="inputText"/>
          </div>
        </div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Percentual da produção utilizada para consumo próprio:</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control" id="inputText"/>
          </div>
        </div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Percentual da produção com armazenamento próprio:</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control" id="inputText"/>
          </div>
        </div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Produtividade média estimada para a safra (kg/ha):</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control" id="inputText"/>
          </div>
        </div>
        <div className='text-center'>
        <div className="col-8 text-center"><h6>Nivel tenológico adotado para esta cultura:</h6></div>
            <label htmlFor="inputTexturaSolo" className="form-label"></label>
            <select className="form-select input" id="inputTexturaSolo">
                <option value=""></option>
                <option value="alto">Alto</option>
                <option value="baixo">Baixo</option>
                <option value="medio">Médio</option>
            </select>
        </div>
        <div className='col-12'></div>
        <div className='col-12'></div>
        </div>
        <div className='col-12'></div>
        <div className="col-4">
          <label htmlFor="inputText" className="form-label centered">Receita estimada</label>
          <label htmlFor="inputText" className="form-label centered invisible">a</label>
          <label htmlFor="inputText" className="form-label centered">Preço estimado de venda</label>
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
        <div className="col-8">
            <label htmlFor="inputText" className="form-label centered">Despesa Estimada</label>
            <label htmlFor="inputText" className="form-label centered invisible">a</label>
          <div className="row centered">
            <div className="col-5">
              <label htmlFor="inputText" className="form-label centered">Custo Estimado Produção</label>
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
            <div className="col-5">
              <label htmlFor="inputText" className="form-label centered">Custo Renovação Safra Prevista</label>
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
          </div>
        </div>
        <div className='col-12'></div>
        <div className='col-12'></div>
        <div className='col-12'></div>
        <div className='col-3'></div>
        <div className='col-6'>
        <label htmlFor="inputText" className="form-label centered">Ano-Safra</label>
              <input type="text" className="form-control" id="inputText"/>
        </div>
        <div className='col-12'></div>
        <div className='col-12'></div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Salvar</button>
        </div>
      </form>
    </div>
     );
}
 
export default FormPerennialCulture;