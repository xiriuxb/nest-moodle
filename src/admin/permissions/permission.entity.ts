import { Role } from 'prisma/generated/nestClient';

export class Permission {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  roles?: Role[];
}
