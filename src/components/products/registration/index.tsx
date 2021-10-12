import { Layout } from "components";

export const ProductRegistration: React.FC = () => {
    return (
      <Layout title="Cadastro de Produtos">
            <div className="columns">
                <div className="field is-half column">
                    <label className="label" htmlFor="inputSku">SKU *</label>
                    <div className="control">
                        <input  className="input"
                        id="inputSku"
                        placeholder="Digite o SKU do produto"/>
                    </div>
                </div>

                <div className="field is-half column">
                    <label className="label" htmlFor="inputPrice">Preço *</label>
                    <div className="control">
                        <input  className="input"
                        id="inputPrice"
                        placeholder="Digite o Preço do produto"/>
                    </div>
                </div>
            </div>
        
            <div className="columns">
                <div className="field column is-full">
                    <label className="label" htmlFor="inputName">Nome *</label>
                    <div className="control">
                        <input  className="input"
                        id="inputName"
                        placeholder="Digite o Nome do produto"/>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="field column is-full">
                    <label className="label" htmlFor="inputName">Descrição Detalhada *</label>
                    <div className="control">
                        <textarea  className="textarea"
                        id="inputDescription"
                        placeholder="Digite o Descrição detalhada do produto"/>
                    </div>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link"> Salvar</button>
                </div>
                <div className="control">
                    <button className="button is-light"> Voltar</button>
                </div>
            
            </div>

      </Layout>  
    )
}