const FS = require('../firebase');
const { db } = FS;

const createAccount = async (req, res) => {
    try{
        const {body: dc } = req;
        const DC = db.collection('dcollections');   
<<<<<<< HEAD
        //al crear la cuenta, se crea un objeto con las propiedades señaladas
        const { _path: { segments } } = await DC.add({
             current_balance: {
                money: dc.money,
                collectables: []
            }
        });
        const id = segments[1];
        //se muestra al usuario
=======
        const { _path: { segments } } = await DC.add({
            current_balance: {
                money: dc.money,
                collectibles: []
            }
        });
        const id = segments[1];
>>>>>>> 55207f66f8ab1e188d9237113156733b01e1beef
        res.send({
            status: 200,
            id,
            money: dc.money,
            collectables: []
        });
    }catch (error){
<<<<<<< HEAD
        console.log(error); //es importante saber lo que pasa interiormente cuando aparece un error
=======
        console.log(error);
>>>>>>> 55207f66f8ab1e188d9237113156733b01e1beef
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
<<<<<<< HEAD
            money: dc.money + money,
            collectables: [dc.collectables]
=======
            money: dc.money,
            collectables: []
>>>>>>> 55207f66f8ab1e188d9237113156733b01e1beef
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
<<<<<<< HEAD
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
        });
        res.send({
            status: 200,
            currentbalance: {
                money,
                collectables: []
=======
        const DC = db.collection('dcollections'); 
        const resp = await DC.update({
            money: dc.money,
            collectables:[{
                collection_name: dc.collection_name,
                amount: dc.amount,
                collection_price: dc.collection_price
            }]
        });  
        res.send({
            status: 200,
            currentbalance: {
                money: dc.money,
                collectables:[
                    {
                        collection_name: dc.collection_name,
                        amount: dc.amount,
                        collection_price: dc.collection_price
                    }
                ]
>>>>>>> 55207f66f8ab1e188d9237113156733b01e1beef
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