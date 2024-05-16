import { React, useState, useEffect } from "react";
import InputMask from "react-input-mask";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/FormStyles.css";
import CurrencyInput from "react-currency-input-field";
import axios from "axios";

const FormProducer = () => {
  const [civilState, setCivilState] = useState("");
  const [states, setStates] = useState([]);
  const [marriageRegime, setMarriageRegime] = useState("");
  const [cpfConjuge, setCpfConjuge] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    cpf: "",
    civilStatus: "",
    marriageRegime: "",
    partnerCpf: "",
    phoneNumber: "",
    email: "",
    timeExperience: "",
    invoicingPerYear: "",
    profile: "",
    agriculturalTechnicalAssistance: "",
    maintenanceFamilyPerYear: "",
    supplierDebts: "",
    normalFundingFromOtherFinancialInstitutions: "",
    extendFundingFromOtherFinancialInstitutions: "",
    investmentInOtherFinancialInstitutions: "",
    street: "",
    number: "",
    district: "",
    city: "",
    state: "",
    complement: "",
    isAcceptedTerm: false,
  });

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/addresses/states`
        );
        setStates(response.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, []);

  const handleOnlyNumber = (e) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    if (numericValue.length > 2) {
      e.target.value = numericValue.slice(0, 5);
    } else {
      e.target.value = numericValue;
    }
  };

  const handleCivilStateChange = (e) => {
    const selectedCivilState = e.target.value;
    setCivilState(selectedCivilState);

    if (
      selectedCivilState === "solteiro" ||
      selectedCivilState === "divorciado" ||
      selectedCivilState === ""
    ) {
      setMarriageRegime("");
      setCpfConjuge("");
    } else if (selectedCivilState === "uniao-estavel") {
      setMarriageRegime("comunhao-parcial");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/producers`,
        formData
      );
      if (response.status === 200) {
        console.log("Producer created successfully:", response.data);
      } else {
        console.error("Error creating producer:", response.data);
      }
    } catch (error) {
      console.error("Error creating producer:", error);
    }
  };

  return (
    <div>
      <div>
        <form className="row g-3">
          <div className="col-12"></div>
          <div className="col-12"></div>
          <div className="col-lg-8 col-md-10 col-sm-12">
            <label htmlFor="inputName" className="form-label">
              Nome Produtor Rural
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              value={formData.fullName}
            />
          </div>
          <div className="col-1"></div>
          <div className="col-lg-3 col-sm-12">
            <label htmlFor="inputCPF" className="form-label">
              CPF do Produtor Rural
            </label>
            <InputMask
              mask="999.999.999-99"
              type="text"
              className="form-control"
              value={formData.cpf}
              id="inputCPF"
            />
          </div>
          <div className="col-lg-3 col-sm-12">
            <label htmlFor="inputCivilState" className="form-label">
              Estado Civil
            </label>
            <select
              className="form-select input"
              id="inputCivilState"
              value={formData.civilStatus}
              onChange={handleCivilStateChange}
            >
              <option value="">Estado Civil</option>
              <option value="casado">Casado(a)</option>
              <option value="divorciado">Divorciado(a)</option>
              <option value="separado">Separado(a)</option>
              <option value="solteiro">Solteiro(a)</option>
              <option value="uniao-estavel">União Estável</option>
              <option value="viuvo">Viúvo(a)</option>
            </select>
          </div>
          <div className="col-lg-5 col-sm-12">
            <label htmlFor="inputMarriage" className="form-label">
              Regime casamento
            </label>
            <select
              className="form-select input"
              id="inputMarriage"
              value={formData.marriageRegime}
              disabled={
                civilState === "solteiro" ||
                civilState === "divorciado" ||
                civilState === ""
              }
              onChange={(e) => setMarriageRegime(e.target.value)}
            >
              <option value=""></option>
              {civilState !== "solteiro" &&
                civilState !== "divorciado" &&
                civilState !== "" && (
                  <>
                    <option value="1">Comunhão Parcial de Bens</option>
                    <option value="2">Comunhão Universal de Bens</option>
                    <option value="3">Separação Obrigatória de Bens</option>
                    <option value="4">Separação Total de Bens</option>
                  </>
                )}
            </select>
          </div>
          <div className="col-1"></div>
          <div className="col-lg-3 col-sm-12">
            <label htmlFor="inputCPF" className="form-label">
              CPF Cônjuge
            </label>
            <InputMask
              mask="999.999.999-99"
              type="text"
              className="form-control"
              id="inputCPF"
              value={formData.partnerCpf}
              onChange={(e) => setCpfConjuge(e.target.value)}
              disabled={
                civilState === "solteiro" ||
                civilState === "divorciado" ||
                civilState === ""
              }
            />
          </div>
          <div className="col-lg-3 col-sm-12">
            <label htmlFor="inputPhone" className="form-label">
              Telefone Celular
            </label>
            <InputMask
              mask="(99) 99999-9999"
              type="text"
              className="form-control"
              value={formData.phoneNumber}
              id="inputPhone"
            />
          </div>
          <div className="col-lg-9 col-sm-12">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail"
              value={formData.email}
            />
          </div>
          <div className="col-lg-2">
            <label htmlFor="inputExperience" className="form-label">
              Experiência (anos)
            </label>
            <input
              type="text"
              className="form-control"
              id="inputExperience"
              maxLength={2}
              value={formData.timeExperience}
              onInput={handleOnlyNumber}
            />
          </div>
          <div className="col-lg-7 col-sm-12">
            <label htmlFor="inputAnnualBilling" className="form-label">
              Faturamento Anual (todas receitas rurais ou não)
            </label>
            <CurrencyInput
              id="inputAnnualBilling"
              name="inputAnnualBilling"
              className="form-control"
              placeholder="R$0,00"
              prefix="R$"
              decimalSeparator=","
              groupSeparator="."
              allowNegativeValue={false}
              decimalsLimit={2}
              value={formData.invoicingPerYear}
              onValueChange={(value, name) => {}}
            />
          </div>
          <div className="col-lg-3 col-sm-12">
            <label htmlFor="inputProducerProfile" className="form-label">
              Perfil do Produtor
            </label>
            <select
              className="form-select input"
              id="inputProducerProfile"
              value={formData.profile}
            >
              <option value="">Perfil do Produtor</option>
              <option value="1">Demais</option>
              <option value="2">PRONAF</option>
              <option value="3">PRONAMP</option>
            </select>
          </div>
          <div className="col-lg-5 col-sm-12">
            <label htmlFor="inputProducerProfile" className="form-label">
              Possui Assistência Técnica Agropecuária?
            </label>
            <select
              className="form-select input"
              id="inputProducerProfile"
              value={formData.agriculturalTechnicalAssistance}
            >
              <option value="1">Não possui</option>
              <option value="2">Sim: Contratada</option>
              <option value="3">Sim: Órgão Estadual</option>
              <option value="4">Sim: Própria</option>
            </select>
          </div>
          <div className="col-1"></div>
          <div className="col-lg-6 col-sm-12">
            <label htmlFor="inputAnnualBilling" className="form-label">
              Quanto desembolsa anualmente para manutenção familiar?
            </label>
            <CurrencyInput
              id="inputAnnualBilling"
              name="inputAnnualBilling"
              className="form-control"
              placeholder="R$0,00"
              prefix="R$"
              decimalSeparator=","
              groupSeparator="."
              allowNegativeValue={false}
              decimalsLimit={2}
              value={formData.maintenanceFamilyPerYear}
              onValueChange={(value, name) => {}}
            />
          </div>
          <div className="row g-3 container-2">
            <div className="col-12"></div>
            <div className="col-12 centered">
              Demais dividas a vencer nos próximos 12 meses
            </div>
            <div className="col-12"></div>
            <div className="col-lg-6 col-sm-12">
              <label htmlFor="inputAnnualBilling" className="form-label">
                Dividas direto com o fornecedor
              </label>
              <CurrencyInput
                id="inputAnnualBilling"
                name="inputAnnualBilling"
                className="form-control"
                placeholder="R$0,00"
                prefix="R$"
                decimalSeparator=","
                groupSeparator="."
                allowNegativeValue={false}
                decimalsLimit={2}
                value={formData.supplierDebts}
                onValueChange={(value, name) => {}}
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <label htmlFor="inputAnnualBilling" className="form-label">
                Custeio normal de outras instituições financeiras
              </label>
              <CurrencyInput
                id="inputAnnualBilling"
                name="inputAnnualBilling"
                className="form-control"
                placeholder="R$0,00"
                prefix="R$"
                decimalSeparator=","
                groupSeparator="."
                allowNegativeValue={false}
                value={formData.normalFundingFromOtherFinancialInstitutions}
                decimalsLimit={2}
                onValueChange={(value, name) => {}}
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <label htmlFor="inputAnnualBilling" className="form-label">
                Custeio prorrogado de outras instituições financeiras
              </label>
              <CurrencyInput
                id="inputAnnualBilling"
                name="inputAnnualBilling"
                className="form-control"
                placeholder="R$0,00"
                value={formData.extendFundingFromOtherFinancialInstitutions}
                prefix="R$"
                decimalSeparator=","
                groupSeparator="."
                allowNegativeValue={false}
                decimalsLimit={2}
                onValueChange={(value, name) => {}}
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <label htmlFor="inputAnnualBilling" className="form-label">
                Investimento em outras instituições financeiras
              </label>
              <CurrencyInput
                id="inputAnnualBilling"
                name="inputAnnualBilling"
                className="form-control"
                placeholder="R$0,00"
                prefix="R$"
                value={formData.investmentInOtherFinancialInstitutions}
                decimalSeparator=","
                groupSeparator="."
                allowNegativeValue={false}
                decimalsLimit={2}
                onValueChange={(value, name) => {}}
              />
            </div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
          </div>
          <div className="col-12"></div>
          <div className="col-12 centered">Informações de Endereço</div>
          <div className="col-12"></div>
          <div className="col-lg-5 col-sm-12">
            <label htmlFor="inputStreet" className="form-label">
              Logradouro
            </label>
            <input
              type="text"
              className="form-control"
              id="inputStreet"
              value={formData.street}
            />
          </div>
          <div className="col-lg-2 col-sm-12">
            <label htmlFor="inputNumber" className="form-label">
              Numero
            </label>
            <input
              type="text"
              className="form-control"
              id="inputNumber"
              value={formData.number}
              onInput={handleOnlyNumber}
            />
          </div>
          <div className="col-lg-5 col-sm-12">
            <label htmlFor="inputComplement" className="form-label">
              Bairro
            </label>
            <input
              type="text"
              className="form-control"
              id="inputComplement"
              value={formData.district}
            />
          </div>
          <div className="col-lg-3 col-sm-12">
            <label htmlFor="inputComplement" className="form-label">
              Complemento
            </label>
            <input
              type="text"
              className="form-control"
              id="inputComplement"
              value={formData.complement}
            />
          </div>
          <div className="col-lg-3 col-sm-12">
            <label htmlFor="inputStateUF" className="form-label">
              Estado - UF
            </label>
            <select
              className="form-select input"
              id="inputStateUF"
              value={formData.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
            >
              <option value="">Estado</option>
              {states.map((state) => (
                <option key={state.id} value={state.uf}>
                  {state.name} - {state.uf}
                </option>
              ))}
            </select>
          </div>
          <div className="col-lg-6 col-sm-12">
            <label htmlFor="inputCity" className="form-label">
              Cidade
            </label>
            <select
              className="form-select input"
              id="inputCity"
              value={formData.city}
            >
              <option value=""></option>
            </select>
          </div>
          <div className="col-12"></div>
          <div className="col-12"></div>
          <div className="col-12 check">
            <label htmlFor="autorizacao" className="form-label">
              <input
                type="checkbox"
                id="autorizacao"
                value={formData.isAcceptedTerm}
              />
              Autorizo nos termos da Resolução CMN nº 3.658 de 17.12.2008, à
              CAIXA a consultar as informações consolidadas, relativas a minha
              pessoa ou à empresa e seus sócios, se for o caso, constantes no
              Sistema de Informações de Créditos (SCR) do BACEN. <br />
              Autorizo, ainda, a CAIXA a fornecer informações sobre as operações
              de crédito com ela realizadas, no sentido de compor o cadastro do
              citado sistema. Os presentes dados são verdadeiros e visam
              facilitar os processos de negociação e transações comerciais, pela
              antecipação de informações à meu respeito. <br />
              Autorizo o arquivamento dos meus dados pessoais e de idoneidade na
              SERASA - Centralização de Serviços dos Bancos S/A, que poderá
              deles se utilizar, respeitadas as disposições legais em vigor.
              Para os devidos fins de direito, declaro(amos) responsável(eis)
              pela veracidade das informações prestadas neste formulário e
              autorizamos sua confirmação. <br />
              Declaro que: <br />
              • as informações por mim prestadas sobre renda/faturamento e
              patrimônio são lícitas; <br />
              • tenho ciência da Lei nº 9.613/98, que dispõe sobre os crimes de
              lavagem ou ocultação de bens, direitos e valores com as alterações
              introduzidas, e dos arts. 297, 298 e 299 do Código Penal; <br />•
              ciente de que a falsidade dos dados declarados configura crime
              previsto na legislação brasileira, passível de responsabilização
              civil, criminal e administrativa, podendo implicar na imediata
              revogação das avaliações de risco de crédito, das operações
              avaliadas e não contratadas e do vencimento antecipado das
              operações de crédito vigente vinculadas a tais dados.
            </label>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormProducer;
