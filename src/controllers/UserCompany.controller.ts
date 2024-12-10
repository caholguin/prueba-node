import { Request, Response } from 'express';
import UserCompany from '../models/UserCompany';


export const createUserCompany = async (req: Request, res: Response) => {
    try {
        const { user_id, company_id, role_id } = req.body;

        console.log(user_id, company_id, role_id );

        if (!user_id || !company_id || !role_id) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const userCompany = await UserCompany.create({ user_id, company_id, role_id });

        res.status(201).json({
            message: 'UserCompany created successfully',
            data: userCompany,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating UserCompany', error });
    }
};