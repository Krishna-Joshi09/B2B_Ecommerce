const zod = require('zod');
const transactionValidation = zod.object({
    body: zod.object({
        // transactionDate: zod.ZodDate(),
        payment_amount: zod 
        .number(),
    }),
});

module.exports = transactionValidation;