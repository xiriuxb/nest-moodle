import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const allowedOrigins = process.env.CORS_ALLOW_ORIGIN;

const corsConfig: CorsOptions = {
  origin: allowedOrigins,
  methods: 'GET,POST,PUT,DELETE,PATCH',
  credentials: true,
};

export default corsConfig;