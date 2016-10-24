import type { Router } from 'express';

declare module "express-device" {
  declare export default {
    capture: () => Router
  };
}
