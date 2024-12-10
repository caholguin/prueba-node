import { Request, Response, NextFunction } from 'express';
import Role from '../models/Role';

export const getRoles = async (req: Request, res: Response) => {

    try {
        const roles = await Role.findAll();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Roles' });
    }
}

export const getRole = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const role = await Role.findByPk(id);

        if (!role) {
            return res.status(404).json({ error: 'Role not found' });
        }

        res.json(role);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Role' });
    }
}

export const addRole = async (req: Request, res: Response) => {

    try {
        const { body } = req;

        const newRole = await Role.create(body);

        res.status(201).json({
            msg: 'New Role created',
            Role: newRole
        });
    } catch (error) {
        res.status(500).json({ error: 'Error creating Role' });
    }
}

export const updateRole = async (req: Request, res: Response) => {

    try {
        const { body } = req;
        const { id } = req.params;

        const [updated] = await Role.update(body, {
            where: { id }
        });

        if (updated) {
            const updateRole = await Role.findByPk(id);
            return res.json({
                msg: 'Role updated',
                Role: updateRole
            });
        }

        res.status(404).json({ error: 'Role not found' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating Role' });
    }
}

export const deleteRole = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deleted = await Role.destroy({
            where: { id }
        });

        if (deleted) {
            return res.json({
                msg: 'Role deleted',
                id
            });
        }

        res.status(404).json({ error: 'Role not found' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting Role' });
    }
}