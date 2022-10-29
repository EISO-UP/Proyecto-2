const FS = require('../firebase');
const { db } = FS;

const createAccount = async (req, res) => {
    try{
        const {body: dc } = req;
        const DC = db.collection('dcollections');   
        //se muestra al usuario

        const { _path: { segments } } = await DC.add({
            current_balance: {
                money: dc.money,
                collectibles: []
            }
        });
        const id = segments[1];
        res.send({
            status: 200,
            id,
            money: dc.money,
            collectables: []
        });
    }catch (error){

        console.log(error); //es importante saber lo que pasa interiormente cuando aparece un error

        
        res.send(error);
    }
  };




  const updateAccount = async (req, res) => {
    try{
        const {body: dc } = req;
        const { money: extraMoney } = dc; //necesitamos extraer el dinero almacenado
        const DC = db.collection('dcollections').doc(id); /* se necesita buscar el id para la cuenta? */
        
        //necesitamos agregar nuevos objetos al actualizar
        //solo si es la primera vez, necesita que pase

        await DC.get()
            .then(response => {

                DC.set({
                    current_balance: {
                        money: oldMoney + extraMoney
                    }
                }, {merge: true});
            })
            .catch(error => {
                console.log(error);
                res.send({
                    current_balance: {},
                    
                })
            })

        console.log(user);

        

        /*const { _path: { segments } } = await DC.add({
               collectibles: 
               [ {
                 collection_name,
                 amount,
                collection_price
                } ]
       });*/  


        const resp = await DC.update({

            money: dc.money + money,
            collectables: [dc.collectables]

        });
        res.send({
            status: 200,
            id
        });
    }catch (error){
        res.send(error);
    }
} 

const CompraVenta = async (req, res) => {
    try{
        const {body: dc } = req;
        const DC = db.collection('dcollections').doc(id);   
        await DC.get()
            .then(response => {

                DC.set({
                    current_balance: {
                        money: oldMoney - colection_price
                    }
                }, {merge: true});
            })
            .catch(error => {
                console.log(error);
                res.send({
                    current_balance: {},
                    
                })
            })
        const resp = await DC.update({
            money: dc.money - money,
            collectables: [dc.collectables]
        });S
        res.send({
            status: 200,
            currentbalance: {
                money,
                collectables: []
            }
        });
    }catch (error){
        res.send(error);
    }
} 


module.exports = {
    createAccount,
    updateAccount,
    CompraVenta
}