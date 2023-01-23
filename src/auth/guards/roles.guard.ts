import { CanActivate, ExecutionContext, Injectable, Logger, mixin } from "@nestjs/common";

export const RoleGuard = (allowedRoles: string[]) => {
    class RoleGuardMixin implements CanActivate {
        canActivate(context: ExecutionContext): boolean {
            const userRoles = context.switchToHttp()
                .getRequest()
                .user.roles.map((role: { name: string }) => { return role.name });

            const found = userRoles.some(r=>allowedRoles.includes(r));
            Logger.log(allowedRoles)
            // your custom logic here
            return found; // or false if the route should not be accessible
        }
    }

    const guard = mixin(RoleGuardMixin);
    return guard;
}
