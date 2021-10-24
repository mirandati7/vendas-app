import { useState } from "react";
import { Layout, Input} from "components";

export const ProductRegistration: React.FC = () => {

    const [sku, setSku] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const submit = () => {
        const product = {
            sku, price ,name ,description
        }
        console.log(product)
    }

    return (
      <Layout title="Cadastro de Produtos">
            <div className="columns">
                <Input label="SKU: *" columnClasses="is-half" onChange={setSku} />
     
                <div className="field is-half column">
                    <label className="label" htmlFor="inputPrice">Preço *</label>
                    <div className="control">
                        <input  className="input" value={price}
                        id="inputPrice" onChange={event => setPrice(event.target.value) }
                        placeholder="Digite o Preço do produto"/>
                    </div>
                </div>
            </div>
        
            <div className="columns">
                <div className="field column is-full">
                    <label className="label" htmlFor="inputName">Nome *</label>
                    <div className="control">
                        <input  className="input" value={name}
                        id="inputName" onChange={event => setName(event.target.value) }
                        placeholder="Digite o Nome do produto"/>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="field column is-full">
                    <label className="label" htmlFor="inputName">Descrição Detalhada *</label>
                    <div className="control">
                        <textarea  className="textarea"
                        id="inputDescription" value={description}
                        onChange={event => setDescription(event.target.value) }
                        placeholder="Digite o Descrição detalhada do produto"/>
                    </div>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link" onClick={submit}> Salvar</button>
                </div>
                <div className="control">
                    <button className="button is-light"> Voltar</button>
                </div>
            
            </div>

      </Layout>  
    )
}