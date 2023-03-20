import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Facture = db.define('factures',{
    code: DataTypes.INTEGER,
    libelle: DataTypes.STRING,
    
},{
    freezeTableName:true
});

export default Facture;


(async()=>{
    await db.sync();
})();