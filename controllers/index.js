const FS = require('../firebase');
const { db } = FS;

const createAccount = async (req, res) => {
    try{
        const {body: dc } = req;
        const DC = db.collection('dcollections');   
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
        console.log(error);
        res.send(error);
    }
  };



const updateAccount = async (req, res) => {
    try{
        const {body: dc } = req;
        const { id, money, collectables } = dc;
        const DC = db.collection('dcollections').doc(id);   
        const resp = await DC.update({
            money: dc.money,
            collectables: []
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