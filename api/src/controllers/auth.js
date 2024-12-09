export const authMiddleware = (jwt) => {
    return (req, res, next) => {
        const authHeader = req.headers.authorization

        if (!authHeader) {
            return res.status(401).json({ erro: 'Token não fornecido' })
        }

        const [, token] = authHeader.split(' ');

        if (!token) {
            return res.status(401).json({ erro: 'Token inválido' });
        }

        try {
            const decoded = jwt.verify(token);
            req.usuario = decoded;
            next();
        } catch (err) {
            return res.status(401).json({ erro: 'Token inválido ou expirado' });
        }
    }
}