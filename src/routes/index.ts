import { Router } from "express";

import Weather from './weather';

const router = Router();

router.use('/weather', Weather);

export default router;