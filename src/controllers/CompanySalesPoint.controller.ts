import { Request, Response } from 'express';
import CompanySalesPoint from '../models/CompanySalesPoint';

export const createCompanySalesPoint = async (req: Request, res: Response) => {
  const { company_id, sales_point_id } = req.body;

  try {   
    if (!company_id || !sales_point_id) {
      return res.status(400).json({
        message: 'Company ID and Sales Point ID are required',
      });
    }

    const companySalesPoint = await CompanySalesPoint.create({
      company_id,
      sales_point_id,
    });

    return res.status(201).json({
      message: 'CompanySalesPoint created successfully',
      data: companySalesPoint,
    });
  } catch (error) {
    console.error('Error creating CompanySalesPoint:', error);
    return res.status(500).json({
      message: 'Error creating CompanySalesPoint',
      error,
    });
  }
};
