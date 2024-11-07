import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { findUserByEmail, comparePassword } from '../services/userService';

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        const user = await findUserByEmail(email);
        if (!user) {
            res.status(401).json({ message: 'Utilisateur non trouvé' });
            return;
        }

        const isMatch = await comparePassword(user, password);
        if (!isMatch) {
            res.status(401).json({ message: 'Mot de passe incorrect' });
            return;
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret', {
            expiresIn: '1h',
        });

        res.json({ token, user: { id: user._id, email: user.email, role: user.role } });
    } catch (err: any) {
        res.status(500).json({ message: 'Erreur interne du serveur', error: err.message });
    }
};
