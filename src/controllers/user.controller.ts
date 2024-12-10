import { Request, Response, NextFunction } from 'express';
import User from '../models/user';

export const getUsers =  async (req: Request, res: Response) => {
   
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
}

export const getUser = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user' });
    }
}

export const addUser = async (req: Request, res: Response) => {
    
    try {
        const { body } = req;
        
        const newUser = await User.create(body); 

        res.status(201).json({
            msg: 'New User created',
            user: newUser
        });
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    
    try {
        const { body } = req;
        const { id } = req.params;

        const [updated] = await User.update(body, {
            where: { id }
        });

        if (updated) {
            const updatedUser = await User.findByPk(id);
            return res.json({
                msg: 'User updated',
                user: updatedUser
            });
        }

        res.status(404).json({ error: 'User not found' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating user' });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deleted = await User.destroy({
            where: { id }
        });

        if (deleted) {
            return res.json({
                msg: 'User deleted',
                id
            });
        }

        res.status(404).json({ error: 'User not found' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting user' });
    }
}