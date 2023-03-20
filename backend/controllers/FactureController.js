 import Facture from "../models/FactureModel.js";


 export const getFactures = async(req, res) =>{
    try {
        const response = await Facture.findAll(
            {
                order: [
                    ['id', 'DESC']
                    
                ]
            }
        );
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
 }


 export const getFactureById = async(req, res) =>{
    try {
        const response = await Facture.findOne({
            where:{
                id: req.params.id
            } 
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
 }


 export const createFacture = async(req, res) =>{
    try {
        await Facture.create(req.body);
        res.status(201).json({msg: "Facture créer avec succès"});
    } catch (error) {
        console.log(error.message);
    }
 }


 export const updateFacture = async(req, res) =>{
    try {
        await Facture.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Facture modifier avec succès"});
    } catch (error) {
        console.log(error.message);
    }
 }


 export const deleteFacture = async(req, res) =>{
    try {
        await Facture.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Facture supprimer avec succès"});
    } catch (error) {
        console.log(error.message);
    }
 }