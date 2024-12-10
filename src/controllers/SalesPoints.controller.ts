import { Request, Response } from 'express';
import SalesPoint from '../models/SalesPoint';

export const createSalesPoint = async (req: Request, res: Response) => {
  const { name, address } = req.body;

  try {   
    if (!name || !address) {
      return res.status(400).json({
        message: 'Name and address are required',
      });
    }
    
    const salesPoint = await SalesPoint.create({ name, address });

    return res.status(201).json({
      message: 'SalesPoint created successfully',
      data: salesPoint,
    });
  } catch (error) {
    console.error('Error creating SalesPoint:', error);
    return res.status(500).json({
      message: 'Error creating SalesPoint',
      error,
    });
  }
};
