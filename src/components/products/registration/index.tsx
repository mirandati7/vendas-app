import { useState } from "react";
import { Layout, Input} from "components";
import { useProductService } from "app/services";
import { Product } from "app/models/products";

export const ProductRegistration: React.FC = () => {

    const service = useProductService();
    const [id, setId] = useState<number>()
    const [created, setCreated] = useState<string>('')

    const [sku, setSku] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const submit = () => {
      
        const product: Product = {
            id,
            sku,
            price: parseFloat(price),
            name,
            description
        }

        if (id){
            service.update(product).then(response => console.log("atualizado"));
        } else {
            service.save(product).then( productResponse => {
                setId(productResponse.id);
                if (productResponse.created != undefined) 
                    setCreated(productResponse.created);
            });
        }
 
    }


    return (
      <Layout title="Cadastro de Produtos">
            {id &&
                <div className="columns">
                    <Input id="inputId" 
                        label="Código: " 
                        value={id}
                        columnClasses="is-half"
                        disabled
                        />
                    
                    <Input id="inputCreated" 
                        label="Data Cadastro:" 
                        value={created}
                        columnClasses="is-half"
                        disabled
                        />

                </div>

            }
            <div className="columns">
                <Input id="inputSku" 
                       label="SKU: *" 
                       columnClasses="is-half"
                       onChange={setSku} 
                       placeholder="Digite o SKU do produto"/>
                
                <Input id="inputPrice" 
                       label="Preço: *" 
                       columnClasses="is-half"
                       onChange={setPrice} 
                       placeholder="Digite o Preço do produto"/>

            </div>
        
            <div className="columns">
                <Input id="inputName" 
                       label="Nome: *" 
                       columnClasses="is-full"
                       onChange={setName} 
                       placeholder="Digite o Nome do produto"/>
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
                    <button className="button is-link" onClick={submit}> 
                        { id ? 'Atualizar'  : 'Salvar' }
                    </button>
                </div>
                <div className="control">
                    <button className="button is-light"> Voltar</button>
                </div>
            
            </div>

      </Layout>  
    )
}