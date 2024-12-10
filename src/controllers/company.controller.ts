import { Request, Response, NextFunction } from 'express';
import Company from '../models/Company';

export const getCompanies =  async (req: Request, res: Response) => {
   
    try {
        const companies = await Company.findAll();
        res.json(companies);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Companys' });
    }
}

export const getCompany = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const company = await Company.findByPk(id);
        
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }

        res.json(company);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Company' });
    }
}

export const addCompany = async (req: Request, res: Response) => {
    
    try {
        const { body } = req;
        
        const newCompany = await Company.create(body);

        res.status(201).json({
            msg: 'New Company created',
            Company: newCompany
        });
    } catch (error) {
        res.status(500).json({ error: 'Error creating Company' });
    }
}

export const updateCompany = async (req: Request, res: Response) => {
    
    try {
        const { body } = req;
        const { id } = req.params;

        const [updated] = await Company.update(body, {
            where: { id }
        });

        if (updated) {
            const updatedCompany = await Company.findByPk(id);
            return res.json({
                msg: 'Company updated',
                Company: updatedCompany
            });
        }

        res.status(404).json({ error: 'Company not found' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating Company' });
    }
}

export const deleteCompany = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deleted = await Company.destroy({
            where: { id }
        });

        if (deleted) {
            return res.json({
                msg: 'Company deleted',
                id
            });
        }

        res.status(404).json({ error: 'Company not found' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting Company' });
    }
}