/* eslint-disable prettier/prettier */
import { UserRole } from "src/auth/user-role.enum";

export const RoleGuard = (roles: UserRole[]) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).send();
        }
        if (!roles.includes(req.user.role)) {
            return res.status(401).send();
        }
        next();
    };
}