import React from "react";
import InputMask from 'react-input-mask';
import CurrencyInput from 'react-currency-input-field';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/FormStyles.css'

const FormBeefCattle = () => {

    const handleOnlyNumber = (e) => {
        const numericValue = e.target.value.replace(/\D/g, '');
        if (numericValue.length > 2) {e.target.value = numericValue.slice(0, 6);}
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
        <div className="col-12"></div>
        <div className="col-12 ">
            <h4 className="centered"><strong>Caracterização da Produção</strong></h4>
            <h6 className="centered">Caso seja desenvolvido mais de um "ciclo de produção" e/ou "sistema de produção" na propriedade, selecionar a opção predominante.</h6>
        </div>
        <div className="col-6">
            <label htmlFor="inputText" className="form-label centered">Ciclo de Produção</label>
            <select className="form-select input" id="inputText">
                <option value=""></option>
                <option value="">Ciclo Completo</option>
                <option value="">Ciclo Cria</option>
                <option value="">Ciclo Cria/Recria</option>
                <option value="">Ciclo Engorda</option>
                <option value="">Ciclo Recria</option>
                <option value="">Ciclo Recria/Engorda</option>
            </select>
        </div>
        <div className="col-6">
            <label htmlFor="inputText" className="form-label centered">Sistema de Produção</label>
            <select className="form-select input" id="inputText">
                <option value=""></option>
                <option value="">Extensivo</option>
                <option value="">Intensivo/Confinamento</option>
                <option value="">Semi-Intensivo</option>
            </select>
        </div>
        <div className="col-12"></div>
        <div className="row g-3 container-2">
        <div className="col-12"></div>
            <div className="col-12 ">
                <h4 className="centered"><strong>Levantamento do Rebanho - em cabeças</strong></h4>
                <h6 className="centered">Relacionar todos os animais do rebanho atual, e os que pretende adquirir, independente se serão ou não comercializados na safra anual prevista.</h6>
            </div>
            <div className="col-12"></div>
        <div className='text-center'>
          <div className="col-9 text-center"><h6><strong>Categoria</strong></h6></div>
          <div className="col-3 text-center"><h6><strong>Quantidade em Cab.</strong></h6></div>
        </div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Bezerros - machos até 12 meses</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
        </div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Bezerras - fêmeas até 12 meses</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
        </div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Garrotes - machos até 12 a 24 meses</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
        </div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Novilhotas - fêmeas até 12 a 24 meses</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
        </div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Novilhos - machos até 12 a 24 meses</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
        </div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Novilhas - fêmeas até 12 a 24 meses</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
        </div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Bois - acima de 36 meses</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
        </div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Vacas - acima de 36 meses</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
        </div>
        <div className='text-center'>
          <div className="col-8 text-center"><h6>Touros Reprodutores</h6></div>
          <div className="col-4">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
        </div>
        <div className="col-12"></div>
        <div className="col-12"></div>
    </div>
        <div className="row g-3 container-3">
            <div className="col-12 ">
                <h4 className="centered"><strong>Caracterização da pastagem</strong></h4>
            </div>
            <div className="col-3"></div>
            <div className="col-6">
                    <label htmlFor="inputName" className="form-label centered">Área da pastagem perene (hectares)</label>
                    <input type="text" className="form-control centered" id="inputName" onInput={handleOnlyNumber}/>
                </div>
                <div className="col-12"></div>
                <div className="col-12"></div>
        </div>
        <div className="row g-3 container-3">
            <div className="col-12 ">
                <h4 className="centered"><strong>Caracterização da despesa - custo anual</strong></h4>
                <h6 className="centered">Custo anual de manutenção/produção previsto para todo o rebanho, incluindo: alimentação; suplementação; vacinas; medicação; mão-de-obra; e demais despesas de manutenção.</h6>
            </div>
            <div className="col-3"></div>
            <div className="col-6">
            <CurrencyInput
                id="inputAnnualBilling"
                name="inputAnnualBilling"
                className="form-control centered"
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
                <div className="col-12"></div>
                <div className="col-12"></div> 
        </div>
        <div className="row g-3 container-3">
            <div className="col-12 ">
                <h4 className="centered"><strong>Receita estimada - Venda de animais na safra anual prevista</strong></h4>
                <h6 className="centered">Relacionar em cada faixa a quantidade e o respectivo valor a receber por cabeça apenas dos animais que serão comercializados na safra anual prevista.</h6>
            </div>
            <div className="col-12"></div> 
            <div className="col-3"></div> 
            <div className="col-2">
                <label htmlFor="inputName" className="form-label centered">R$/Arroba Boi</label>
                <input type="text" className="form-control centered" id="inputName" onInput={handleOnlyNumber}/>
                <button type="text" className="btn-primary bm-second">Consulta @ Boi</button>
            </div>
            <div className="col-2">
                <label htmlFor="inputName" className="form-label centered">R$/Arroba Vaca</label>
                <input type="text" className="form-control centered" id="inputName" onInput={handleOnlyNumber}/>
                <button type="text" className="btn-primary bm-second">Consulta @ Vaca</button>
            </div>
            <div className="col-2">
                <button type="text" className="btn btn-primary bm-primary">Gerar Evolução</button>
            </div>
            <div className="col-12"></div> 
            <div className="col-12"></div> 
            <div className='text-center'>
                <div className="col-5 text-center"><h6><strong>Categoria</strong></h6></div>
                <div className="col-4 text-center"><h6><strong>Quantidade em Cab.</strong></h6></div>
                <div className="col-3 text-center"><h6><strong>Receita por unid. (R$/cab) </strong></h6></div>
            </div>
            <div className='text-center'>
          <div className="col-5 text-center"><h6>Bezerros - machos até 12 meses</h6></div>
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
          <div className="col-1"></div> 
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <CurrencyInput
                id="inputAnnualBilling"
                name="inputAnnualBilling"
                className="form-control centered"
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
        <div className='text-center'>
          <div className="col-5 text-center"><h6>Bezerras - fêmeas até 12 meses</h6></div>
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
          <div className="col-1"></div> 
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <CurrencyInput
                id="inputAnnualBilling"
                name="inputAnnualBilling"
                className="form-control centered"
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
        <div className='text-center'>
          <div className="col-5 text-center"><h6>Garrotes - machos até 12 meses a 24 meses</h6></div>
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
          <div className="col-1"></div> 
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <CurrencyInput
                id="inputAnnualBilling"
                name="inputAnnualBilling"
                className="form-control centered"
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
        <div className='text-center'>
          <div className="col-5 text-center"><h6>Novilhotas - fêmeas até 12 meses a 24 meses</h6></div>
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
          <div className="col-1"></div> 
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <CurrencyInput
                id="inputAnnualBilling"
                name="inputAnnualBilling"
                className="form-control centered"
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
        <div className='text-center'>
          <div className="col-5 text-center"><h6>Novilhos - machos até 24 a 36 meses</h6></div>
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
          <div className="col-1"></div> 
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <CurrencyInput
                id="inputAnnualBilling"
                name="inputAnnualBilling"
                className="form-control centered"
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
        <div className='text-center'>
          <div className="col-5 text-center"><h6>Novilhas - fêmeas até 24 a 36 meses</h6></div>
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
          <div className="col-1"></div> 
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <CurrencyInput
                id="inputAnnualBilling"
                name="inputAnnualBilling"
                className="form-control centered"
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
        <div className='text-center'>
          <div className="col-5 text-center"><h6>Bois Magros - acima de 36 meses</h6></div>
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
          <div className="col-1"></div> 
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <CurrencyInput
                id="inputAnnualBilling"
                name="inputAnnualBilling"
                className="form-control centered"
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
        <div className='text-center'>
          <div className="col-5 text-center"><h6>Vacas Magras - acima de 36 meses</h6></div>
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
          <div className="col-1"></div> 
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <CurrencyInput
                id="inputAnnualBilling"
                name="inputAnnualBilling"
                className="form-control centered"
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
        <div className='text-center'>
          <div className="col-5 text-center"><h6>Bois gordos</h6></div>
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
          <div className="col-1"></div> 
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <CurrencyInput
                id="inputAnnualBilling"
                name="inputAnnualBilling"
                className="form-control centered"
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
        <div className='text-center'>
          <div className="col-5 text-center"><h6>Vacas Gordas</h6></div>
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <input type="text" className="form-control centered" id="inputText" onInput={handleOnlyNumber}/>
          </div>
          <div className="col-1"></div> 
          <div className="col-3">
            <label htmlFor="inputText" className="form-label centered"></label>
            <CurrencyInput
                id="inputAnnualBilling"
                name="inputAnnualBilling"
                className="form-control centered"
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
        
                <div className="col-12"></div>
                <div className="col-12"></div> 
        </div>




        <div className="col-12 submit-button">
          <button type="submit" className="btn btn-primary">Salvar</button>
        </div>
        
        </form>
     </div>
     );
}
 
export default FormBeefCattle;