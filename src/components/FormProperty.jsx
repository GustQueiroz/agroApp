import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputMask from 'react-input-mask';
import './styles/FormStyles.css';
import CurrencyInput from 'react-currency-input-field';

const FormProperty = () => {
  const [temMatricula, setTemMatricula] = useState('no');

  const handleOnlyNumber = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    if (numericValue.length > 2) {e.target.value = numericValue.slice(0, 30);}
    else {e.target.value = numericValue;}};

  return (
    <div>
      <form className="row g-3">
      <div className="col-12"></div>
      <div className="col-12"></div>
        <div className="col-8">
          <label htmlFor="inputName" className="form-label">Nome Produtor Rural</label>
          <input type="text" className="form-control" id="inputName" />
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
          />
        </div>
        <div className="col-2">
          <label htmlFor="inputSelectMatricula" className="form-label centered">Tem Matrícula?</label>
          <select
            className="form-select input"
            id="inputSelectMatricula"
            value={temMatricula}
            onChange={(e) => setTemMatricula(e.target.value)}
          >
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>
        <div className="col-2">
            <label htmlFor="inputMatricula" className="form-label centered">Matricula</label>
                <input
                type="text"
                className="form-control"
                id="inputMatricula"
                disabled={temMatricula === 'no'}
                onInput={handleOnlyNumber}
            />
        </div>
        <div className="col-4">
          <label htmlFor="inputLote" className="form-label centered">Lote</label>
          <input type="text" className="form-control" id="inputLote" />
        </div>
        <div className="col-4">
          <label htmlFor="inputGleba" className="form-label centered">Gleba</label>
          <input type="text" className="form-control" id="inputGleba" />
        </div>
        <div className="col-12">
          <label htmlFor="inputCCIR" className="form-label centered">CCIR - Certificado de Cadastro de Imóvel Rural</label>
          <input type="text" className="form-control" id="inputCCIR" />
        </div>
        <div className="col-12">
          <label htmlFor="propertyName" className="form-label centered">Nome da propriedade</label>
          <input type="text" className="form-control" id="inputPropertyName" />
        </div>
        <div className="col-7">
            <label htmlFor="inputTexturaSolo" className="form-label">Textura predominante do solo na área explorada</label>
            <select className="form-select input" id="inputTexturaSolo">
                <option value="">Selecione a textura do solo</option>
                <option value="arenoso">Arenoso</option>
                <option value="argiloso">Argiloso</option>
                <option value="medio">Médio</option>
            </select>
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <label htmlFor="inputArea" className="form-label">Área total da propriedade (hectares)</label>
          <input type="text" className="form-control" id="inputTotalArea" onInput={handleOnlyNumber}/>
        </div>
        <div className="col-2">
            <label htmlFor="inputStateUF" className="form-label">Estado - UF</label>
            <select className="form-select input" id="inputStateUF">
                <option value="">Estado</option>
                <option value="São Paulo">São Paulo</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Minas Gerais">Minas Gerais</option>
            </select>
        </div>
        <div className="col-5">
            <label htmlFor="inputCity" className="form-label">Cidade</label>
            <select className="form-select input" id="inputCity">
                <option value="">Selecione uma cidade</option>
                <option value="São Paulo">São Paulo</option>
                <option value="São Pedro">São Pedro</option>
                <option value="Blumenau">Blumenau</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Medianeira">Medianeira</option>
                <option value="Curitiba">Curitiba</option>
                <option value="São Paulo">São Paulo</option>
                <option value="São Pedro">São Pedro</option>
                <option value="Blumenau">Blumenau</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Medianeira">Medianeira</option>
                <option value="Curitiba">Curitiba</option>
            </select>
        </div>
        <div className='col-1'></div>
        <div className="col-4">
          <label htmlFor="inputArea" className="form-label">Área explorada economicamente (hectares)</label>
          <input type="text" className="form-control" id="inputArea" onInput={handleOnlyNumber}/>
        </div>
        <div className="col-3">
            <label htmlFor="inputContract" className="form-label">Tipo de contrato</label>
            <select className="form-select input" id="inputContract">
                <option value="">Selecione um tipo</option>
                <option value="Arrendamento">Arrendamento</option>
                <option value="Comodato">Comodato</option>
                <option value="Parceiro">Parceiro</option>
                <option value="Posseiro">Posseiro</option>
                <option value="Próprio">Próprio</option>
                <option value="Usufutuário">Usufutuário</option>
            </select>
        </div>
        <div className="col-5">
          <label htmlFor="inputProducer" className="form-label">Proprietário</label>
          <input type="text" className="form-control" id="inputProducer" />
        </div>
        <div className="col-2">
          <label htmlFor="inputCPF" className="form-label">
            CPF do Proprietario
          </label>
          <InputMask
            mask="999.999.999-99"
            type="text"
            className="form-control"
            id="inputCPF"
          />
          </div>
        <div className="col-2">
          <label htmlFor="inputAddress" className="form-label">% da Prop.</label>
          <input type="text" className="form-control" id="inputAddress" onInput={handleOnlyNumber} />
        </div>
        <div className="col-6">
          <label htmlFor="inputAddress" className="form-label">Tamanho da área contratada (hectares)</label>
          <input type="text" className="form-control" id="inputAddress" onInput={handleOnlyNumber}/>
        </div>
        <div className="col-3">
          <label htmlFor="inputAddress" className="form-label">Vencimento do contrato</label>
          <input type="text" className="form-control" id="inputAddress" />
        </div>
        <div className="col-3">
          <label htmlFor="inputAddress" className="form-label">Valor R$/hectares/ano</label>
          <CurrencyInput
          className="form-control"
          id="inputAddress" 
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
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Adicionar Imóvel</button>
        </div>
      </form>
    </div>
  );
}

export default FormProperty;
